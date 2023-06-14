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

const validateRevImg = [
  check('url')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('URL is required')
    .isURL()
    .withMessage('Must be a valid URL'),
  handleValidationErrors
];

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

    for (let spotImage of spotImages) {
      spot.dataValues.previewImage = spotImage.url;
    }
    
    review.dataValues.Spot = spot;
  };

  res.json({ Reviews: reviews });
});

router.post('/:reviewId/images', validateRevImg, restoreUser, async (req, res) => {
  const user = validateUser(req, res);

  const review = await Review.findByPk(req.params.reviewId, {
    where: {
      userId: user.id
    }
  });

  const reviewImages = await ReviewImage.findAll({
    where: {
      reviewId: req.params.reviewId
    }
  });

  if (reviewImages.length >= 10) {
    const err = new Error();
    err.message = "Maximum number of images for this resource was reached";
    res.status(403);
    return res.json(err);
  }

  if (review.dataValues.userId !== user.id) {
    const err = new Error();
    err.message = "Review couldn't be found";
    res.status(404);
    return res.json(err);
  }
  
  
  const { url } = req.body;
  
  const revImg = await ReviewImage.create({
    reviewId: req.params.reviewId,
    url
  });

  
  res.json(await ReviewImage.findByPk(revImg.id, {
    attributes: ['id', 'url']
  }));
})

module.exports = router;