const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');

const { Spot, Review, SpotImage, ReviewImage, User, Booking } = require('../../db/models');

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

router.delete('/:imageId', restoreUser, async (req, res) => {
  const user = validateUser(req, res);

  if (!user) {
    const err = new Error();
    err.status = 403;
    err.message = 'Authentication required';
    res.status(401)
    return res.json(err)
  }

  const reviewImage = await ReviewImage.findByPk(req.params.imageId, {
    attributes: ['reviewId', 'url', 'id']
  });

  if (!reviewImage) {
    const err = new Error();
    err.message = "Review Image couldn't be found";
    res.status(404)
    return res.json(err)
  }

  const review = await Review.findByPk(reviewImage.reviewId)

  if (review.userId !== user.id) {
    const err = new Error();
    err.status = 403;
    err.message = "Forbidden";
    res.status(403)
    return res.json(err)
  }

  await reviewImage.destroy();

  res.json({ message: "Successfully deleted" })
})

module.exports = router;