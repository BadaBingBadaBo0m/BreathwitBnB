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

router.get('/current', restoreUser, async (req, res) => {
  const user = validateUser(req, res);

  const booking = await Booking.findAll({
    where: [
      { userId: user.id },
      { spotId: 1 }
    ],
    include: {
      model: Spot,
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    }
  })

  res.json({ Bookings: booking });
})

module.exports = router;