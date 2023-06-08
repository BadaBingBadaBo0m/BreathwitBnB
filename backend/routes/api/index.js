const router = require('express').Router();
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js')

router.use(restoreUser);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;