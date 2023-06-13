const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');

const { Spot, Review, SpotImage, ReviewImage, User } = require('../../db/models');

const validateUser = (req, res) => {
  const { user } = req;
  
  if (!user) {
    const err = new Error();
    err.status = 401;
    err.message = 'Authentication required';
    res.status(401)
    return res.json(err)
  }

  return user;
};

router.get('/current', restoreUser, async (req, res) => {
  const user = validateUser(req, res);

  const reviews = await Review.findAll({
    where: {
      userId: user.id
    },
    include: [{
      model: User,
      attributes: ['id', 'firstName', 'lastName']
    }, {
      model: ReviewImage,
      attributes: ['id', 'url']
    }]
  });

  for (let review of reviews) {
    const spot = await Spot.findByPk(review.dataValues.spotId, {
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'spotId']
      }
    });

    const spotImages = await SpotImage.findAll({
      where: {
        spotId: spot.id,
        preview: true
      }
    });

    for (spotImage of spotImages) {
      spot.dataValues.previewImage = spotImage.url;
    }
    
    review.dataValues.Spot = spot;
  };

  res.json({ Reviews: reviews });
});

module.exports = router;