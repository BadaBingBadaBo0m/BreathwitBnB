const express = require('express');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');

const { Category } = require('../../db/models');

router.get('/', async (req, res) => {
  const categories = await Category.findAll();

  return res.json({ "Categories": categories })
});

module.exports = router;
