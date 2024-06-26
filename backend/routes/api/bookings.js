const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');
const Sequelize = require('sequelize');
const { Op } = Sequelize;

const { Spot, Booking } = require('../../db/models');

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
    ],
    include: {
      model: Spot,
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    }
  });

  res.json({ Bookings: booking });
})

router.put('/:bookingId', restoreUser, async (req, res) => {
  const user = validateUser(req, res);

  const booking = await Booking.findByPk(req.params.bookingId);

  if (!booking) {
    const err = new Error();
    err.message = "Booking couldn't be found";
    res.status(404)
    return res.json(err)
  }

  if (booking.dataValues.userId !== user.id) {
    const err = new Error();
    err.message = 'Forbidden';
    res.status(403)
    return res.json(err)
  }

  if (booking.dataValues.endDate < new Date()) {
    const err = new Error();
    err.message = "Bad Request";
    err.errors = { endDate: "Past bookings can't be modified" }
    res.status(403);
    return res.json(err);
  }

  let newStartDate = booking.startDate;
  let newEndDate = booking.endDate;

  if (req.body.startDate) {
    newStartDate = new Date(req.body.startDate);
  }

  if (req.body.endDate) {
    newEndDate = new Date(req.body.endDate);
  }


  if (newStartDate == 'Invalid Date' && newEndDate == 'Invalid Date') {
    const err = new Error();
    err.message = "Bad Request";
    err.errors = {
      startDate: "Start date must be a valid date",
      endDate: "End date must be a valid date"
    }
    res.status(403);
    return res.json(err);
  }

  if (newStartDate == 'Invalid Date') {
    const err = new Error();
    err.message = "Bad Request";
    err.errors = { startDate: "Start date must be a valid date" }
    res.status(403);
    return res.json(err);
  }

  if (newEndDate == 'Invalid Date') {
    const err = new Error();
    err.message = "Bad Request";
    err.errors = { endDate: "End date must be a valid date" }
    res.status(403);
    return res.json(err);
  }

  // END DATE SHOULD ALWAYS BE GREATER THAN START DATE 
  if (newStartDate >= newEndDate) {
    const err = new Error();
    err.message = "Bad Request";
    err.errors = { endDate: "endDate cannot be on or before startDate" }
    res.status(400);
    return res.json(err);
  }

  if (newStartDate < new Date()) {
    const err = new Error();
    err.message = "Bad Request";
    err.errors = { endDate: "Past bookings can't be modified" }
    res.status(403);
    return res.json(err);
  }

  const allBookings = await Booking.findAll({
    where: {
      id: {
        [Op.notIn]: [req.params.bookingId]
      }
    }
  })

  for (let booking of allBookings) {
    let bookingStartDate = new Date(booking.startDate)
    let bookingEndDate = new Date(booking.endDate)
    // DOES NOT CONFLICT WITH CURRENT BOOKINGS

    if ((newEndDate <= bookingEndDate && newEndDate >= bookingStartDate) && (newStartDate >= bookingStartDate && newStartDate <= bookingEndDate)) {
      const err = new Error();
      err.message = "Sorry, this spot is already booked for the specified dates";
      err.errors = {
        startDate: 'Start date conflicts with an existing booking',
        endDate: 'End date conflicts with an existing booking'
      }
      res.status(403);
      return res.json(err);
    }

    if (newStartDate >= bookingStartDate && newStartDate <= bookingEndDate) {
      const err = new Error();
      err.message = "Sorry, this spot is already booked for the specified dates";
      err.errors = { startDate: "Start date conflicts with an existing booking" }
      res.status(403);
      return res.json(err);
    }

    if (newEndDate <= bookingEndDate && newEndDate >= bookingStartDate) {
      const err = new Error();
      err.message = "Sorry, this spot is already booked for the specified dates";
      err.errors = { endDate: "End date conflicts with an existing booking" }
      res.status(403);
      return res.json(err);
    }

    if (newStartDate < bookingStartDate && newEndDate > bookingEndDate) {
      const err = new Error();
      err.message = "Sorry, this spot is already booked for the specified dates";
      err.errors = { endDate: "End date conflicts with an existing booking" }
      res.status(403);
      return res.json(err);
    }
  }

  const { startDate, endDate } = req.body

  if (startDate) {
    booking.startDate = startDate;
  }

  if (endDate) {
    booking.endDate = endDate;
  }

  booking.save();
  res.json(booking);
})

router.delete('/:bookingId', restoreUser, async (req, res) => {
  const user = validateUser(req, res);

  if (!user) {
    const err = new Error();
    err.message = 'Authentication required';
    res.status(401)
    return res.json(err)
  }

  const booking = await Booking.findByPk(req.params.bookingId)

  if (!booking) {
    const err = new Error();
    err.message = "Booking couldn't be found";
    res.status(404)
    return res.json(err)
  }

  if (booking.userId !== user.id) {
    const err = new Error();
    err.message = "Forbidden";
    res.status(403)
    return res.json(err)
  }

  const startDate = new Date(booking.startDate);
  const endDate = new Date(booking.endDate);
  const currentDate = new Date();

  if ((currentDate <= endDate && currentDate >= startDate) && (currentDate >= startDate && currentDate <= endDate)) {
    const err = new Error();
    err.message = "Bookings that have been started can't be deleted";
    res.status(403);
    return res.json(err);
  }

  if (booking.dataValues.endDate < new Date()) {
    const err = new Error();
    err.message = "Past bookings can't be deleted";
    res.status(403);
    return res.json(err);
  }

  await booking.destroy();

  res.json({ message: 'Successfully deleted' })
})

module.exports = router;
