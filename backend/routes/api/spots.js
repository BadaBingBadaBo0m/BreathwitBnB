const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json('route is working')
})

module.exports = router;