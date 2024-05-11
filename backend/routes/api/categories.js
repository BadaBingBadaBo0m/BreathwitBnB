const express = require('express');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');
const AWS = require('aws-sdk');
const multer = require('multer');

const { Category } = require('../../db/models');
const { fileFilter } = require('../../utils/AWS-helpers');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1024 * 1024 * 5 }, // Limiting file size to 5MB
  fileFilter: fileFilter
});

router.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file

  if (!file) {
    res.status(500)
    return res.json({ "error": "No file uploaded" })
  }

  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype
  };

  try {
    await s3.upload(params).promise();
    res.status(200);
    res.json({ "message": "File uploaded" })
  } catch (error) {
    console.error(error);
    res.status(500);
    return res.json({ "error": "Error uploading to s3" })
  }
});

router.get('/', async (req, res) => {
  const categories = await Category.findAll();

  return res.json({ "Categories": categories })
});

module.exports = router;
