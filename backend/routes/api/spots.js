const express = require('express');
const router = express.Router();

const { Spot, Review } = require('../../db/models');

router.get('/', async (req, res) => {
  const spots = await Spot.findAll({
    include: {
      model: Review,
      attributes: [ 'stars' ]
    }
  });
  res.json(spots);
})

module.exports = router;
