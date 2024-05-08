const express = require('express');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');

router.get('/', async (req, res) => {

  return res.json({ "categories": "Bruh" })
});

module.exports = router;
