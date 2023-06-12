const express = require('express');
const router = express.Router();

const { Spot, Review, SpotImage, ReviewImage } = require('../../db/models');

const avgRatingAndPreviewImg = async (spots) => {
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
  
  return spots
}

router.get('/current', async (req, res, next) => {
  if (!req.user) {
    const err = new Error('Must be logged in to view');
    err.status = 401;
    err.title = 'Login failed';
    return next(err);
  }

  const spots = await Spot.findAll({
    where: {
      ownerId: req.user.id
    }
  })

  res.json({ Spots: await avgRatingAndPreviewImg(spots) });
});

router.get('/:spotId', async (req, res) => {
  const spot = await Spot.findByPk(req.params.spotId);

  const reviews = await Review.findAll({
    where: {
      spotId: spot.id
    },
    include: {
      model: ReviewImage
    }
  });
  
  const stars = [];
  let revImg = {};
  let count = 0;
  let numReviews = 0
  for (review of reviews) {
    numReviews++;
    count += review.stars;
    stars.push(review.stars);
    revImg.ReviewImage = review.ReviewImages;
  }
  spot.dataValues.avgRating = count / stars.length;
  spot.dataValues.numReviews = numReviews;
  spot.dataValues.ReviewImages = revImg.ReviewImage;

  res.json(spot);
});

router.get('/', async (req, res) => {
  const spots = await Spot.findAll();

  res.json({ Spots: await avgRatingAndPreviewImg(spots) });
});

module.exports = router;
