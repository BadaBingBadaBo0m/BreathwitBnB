const express = require('express');
const router = express.Router();

const { Spot, Review, SpotImage } = require('../../db/models');

router.get('/', async (req, res) => {
  const spots = await Spot.findAll();

  for (spot of spots) {
    const reviews = await Review.findAll({
      where: {
        spotId: spot.id
      }
    });
    
    const stars = [];
    let count = 0;
    for (review of reviews) {
      count += review.stars;
      stars.push(review.stars);
    }
    spot.dataValues.avgRating = count / stars.length;

    const spotImages = await SpotImage.findAll({
      where: {
        spotId: spot.id,
        preview: true
      }
    });
    
    for (spotImage of spotImages) {
      spot.dataValues.previewImage = spotImage.url;
    }
  }

  res.json(spots);
})

module.exports = router;
