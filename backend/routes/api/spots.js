const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');

const { Spot, Review, SpotImage, ReviewImage, User, Booking } = require('../../db/models');

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
  
  return spots;
};

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

const createPagination = (req, res, next) => {
  let { page, size } = req.query;
  if (!page) page = 1;
  if (!size) size = 20;

  if (page > 10) page = 10;
  if (size > 20) size = 20;
  if (page < 1) page = 1;
  if (size < 1) size = 1;


  let pagination = {};

  if (page >= 1 && size >=1) {
    pagination.limit = size,
    pagination.offset = (page - 1) * size
    pagination.page = page;
    pagination.size = size
  }

  return pagination
}


const validateSpots = [
  check('address')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Street address is required'),
  check('city')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('City is required'),
  check('state')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('State is required'),
  check('country')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Country is required'),
  check('lat')
    .exists({ checkFalsy: true })
    .isDecimal()
    .withMessage('Latitude is not valid'),
  check('lng')
    .exists({ checkFalsy: true })
    .isDecimal()
    .withMessage('Longitude is not valid'),
  check('name')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 50 })
    .withMessage('Name must be less than 50 characters'),
  check('description')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Description is required'),
  check('price')
    .exists({ checkFalsy: true })
    .withMessage('Price is required')
    .isInt()
    .withMessage('Price must be a valid number'),
  handleValidationErrors
  ];

  const validateSpotImage = [
    check('url')
      .exists({ checkFalsy: true })
      .isURL()
      .withMessage('Must be a valid URL')
      .notEmpty()
      .withMessage('URL is required'),
    check('preview')
      .exists()
      .isBoolean()
      .withMessage('Preview must be true or false'),
    handleValidationErrors
  ];

  const validateReview = [
    check('review')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Review text is required'),
    check('stars')
      .isInt({
        min: 1,
        max: 5
      })
      .withMessage('Stars must be an integer from 1 to 5'),
    handleValidationErrors
  ];

  const checkQuery = [
    check('minPrice')
      .optional()
      .isInt({
        min: 0
      })
      .withMessage('Minimum price must be greater than or equal to 0'),
    check('maxPrice')
      .optional()
      .isInt({
        min: 0
      })
      .withMessage('Maximum price must be greater than or equal to 0'),
    check('minLat')
      .optional()
      .isDecimal()
      .withMessage('Minimum latitude is invalid'),
    check('maxLat')
      .optional()
      .isDecimal()
      .withMessage('Maximum latitude is invalid'),
    check('minLng')
      .optional()
      .isDecimal()
      .withMessage('Minimum longitude is invalid'),
    check('maxLng')
      .optional()
      .isDecimal()
      .withMessage('Maximum longitude is invalid'),
    check('page')
      .optional()
      .isInt({ min: 0 })
      .withMessage('Page must be greater than or equal to 1'),
    check('size')
      .optional()
      .isInt({ min: 0 })
      .withMessage('Size must be greater than or equal to 1'),
    handleValidationErrors
  ]
  
  router.get('/current', restoreUser, async (req, res, next) => {
    const { user } = req;
    
    if (!user) {
      const err = new Error();
      err.status = 401;
      err.message = 'Authentication required';
      res.status(401)
      return res.json(err)
    }
    
    const spots = await Spot.findAll({
      where: {
        ownerId: req.user.id
    }
  });

  if (!spots.length) {
    res.status(404);
    return res.json({ message: "Spot couldn't be found" });
  }
  
  res.json({ Spots: await avgRatingAndPreviewImg(spots) });
});

router.get('/:spotId', async (req, res) => {
  const spot = await Spot.findByPk(req.params.spotId, {
    include: [
      {
        model: SpotImage
      },
      {
        model: User,
        as: 'Owner'
      }
    ]
  });
  
  if (!spot) {
    res.json({
      message: "Spot couldn't be found"
    })
  }
  
  const reviews = await Review.findAll({
    where: {
      spotId: spot.id
    },
    include: {
      model: ReviewImage
    }
  });
  
  const stars = [];
  let count = 0;
  let numReviews = 0;
  for (review of reviews) {
    numReviews++;
    count += review.stars;
    stars.push(review.stars);
  }
  spot.dataValues.avgRating = count / stars.length;
  spot.dataValues.numReviews = numReviews;
  
  res.json(spot);
});

router.get('/', checkQuery, async (req, res) => {
  let pagination = createPagination(req, res);
  const error = {};
  const where = {};
  
  const { minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;

  if (maxPrice) {
    where.price = { [Op.lte]: maxPrice };
  }
  
  if (minPrice) {
    where.price = { [Op.gte]: minPrice }
  }

  if (minPrice && maxPrice) {
    where.price = { [Op.between]: [minPrice, maxPrice] }
  }

  if (maxLat) {
    where.lat = { [Op.lte]: maxLat }
  }

  if (minLat) {
    where.lat = { [Op.gte]: minLat }
  }

  if (minLat && maxLat) {
    where.lat = { [Op.between]: [minLat, maxLat] }
  }

  if (maxLng) {
    where.lng = { [Op.lte]: maxLng }
  }

  if (minLng) {
    where.lng = { [Op.gte]: minLng }
  }

  if (minLng && maxLng) {
    where.lng = { [Op.between]: [minLng, maxLng] }
  }

  if (Object.keys(error).length) {
    const err = new Error();
    err.message = 'Bad Request';
    err.errors = error
    res.status(400)
    return res.json(err)
  }
  
  const spots = await Spot.findAll({
    ...pagination,
    where
  });

  res.json({
    Spots: await avgRatingAndPreviewImg(spots),
    page: pagination.page,
    size: pagination.size
  });
});

router.get('/:spotId/bookings', restoreUser, async (req, res) => {
  const user = validateUser(req, res);

  const spot = await Spot.findByPk(req.params.spotId)
  
  if (!spot) {
    const err = new Error();
    err.message = "Spot couldn't be found";
    res.status(404);
    return res.json(err);
  }

  if (spot.ownerId === user.id) {
    const bookings = await Booking.findAll({
      where: {
        spotId: req.params.spotId
      },
      include: {
        model: User,
        attributes: ['id', 'firstName', 'lastName']
      }
    });

    if (!bookings.length) {
      res.json({ Bookings: [] })
    }

    return res.json(bookings)
  }

  const bookings = await Booking.findAll({
    where: {
      spotId: req.params.spotId
    },
    attributes: ['spotId', 'startDate', 'endDate']
  });

  res.json({ Bookings: bookings });
})

router.post('/:spotId/bookings', restoreUser, async (req, res) => {
  const user = validateUser(req, res);
  let newStartDate = new Date(req.body.startDate);
  let newEndDate = new Date(req.body.endDate);
  const spot = await Spot.findByPk(req.params.spotId);

  if (!spot) {
    return res.json({ message: "Spot couldn't be found" })
  } 

  if (spot.ownerId === user.id) {
    const err = new Error();
    err.message = 'Forbidden';
    res.status(403);
    return res.json(err);
  }
  
  // END DATE SHOULD ALWAYS BE GREATER THAN START DATE 
  if (newStartDate >= newEndDate) {
    const err = new Error();
    err.message = "Bad Request";
    err.errors = { endDate: "endDate cannot be on or before startDate" }
    res.status(403);
    return res.json(err);
  }

  // if (newStartDate < new Date()) {
  //   const err = new Error();
  //   err.message = "Bad Request";
  //   err.errors = { endDate: "Cannot make a booking in the past" }
  //   res.status(403);
  //   return res.json(err);
  // }
  
  const allBookings = await Booking.findAll()
  
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
  
  if (!endDate && !startDate) {
    return res.json({message: 'Start date and end date is required'})
  }

  if (!startDate) {
    return res.json({message: 'Start date is required'})
  }

  if (!endDate) {
    return res.json({message: 'End date is required'})
  }

  const newBooking = await Booking.create({
    spotId: req.params.spotId,
    userId: user.id,
    startDate,
    endDate
  });

  res.json(newBooking);
})

router.put('/:spotId', validateSpots, restoreUser, async (req, res) => {
  const user = validateUser(req, res);

  const updatedSpot = await Spot.findByPk(req.params.spotId);

  if (!updatedSpot) {
    const err = new Error();
    err.message = "Spot couldn't be found";
    res.status(404);
    return res.json(err);
  }

  if (updatedSpot.ownerId !== user.id) {
    const err = new Error();
    err.message = 'Forbidden';
    res.status(403);
    return res.json(err);
  }

  const { address, city, state, country, lat, lng, name, description, price } = req.body;

  if (address) {
    updatedSpot.address = address;
  }
  if (city) {
    updatedSpot.city = city;
  }
  if (state) {
    updatedSpot.country = country;
  }
  if (lat) {
    updatedSpot.lat = lat;
  }
  if (lng) {
    updatedSpot.lng = lng;
  }
  if (name) {
    updatedSpot.name = name;
  }
  if (description) {
    updatedSpot.description = description;
  }
  if (price) {
    updatedSpot.price = price;
  }
  
  await updatedSpot.save();
  res.json(updatedSpot);
});

router.delete('/:spotId', restoreUser, async (req, res) => {
  const user = validateUser(req, res);
  const spot = await Spot.findByPk(req.params.spotId);
  
  if (!spot) {
    const err = new Error();
    err.message = "Spot couldn't be found";
    res.status(404);
    return res.json(err);
  }

  if (spot.ownerId !== user.id) {
    const err = new Error();
    err.message = 'Forbidden';
    res.status(403);
    return res.json(err);
  }

  await spot.destroy();
  res.json({ message: 'Successfully deleted' });
});

router.post('/:spotId/images', validateSpotImage, restoreUser, async (req, res) => {
  const user = validateUser(req, res);
  const spot = await Spot.findByPk(req.params.spotId);

  if (!spot) {
    const err = new Error();
    err.message = "Spot couldn't be found";
    res.status(404);
    return res.json(err);
  }

  if (spot.ownerId !== user.id) {
    const err = new Error();
    err.message = 'Forbidden';
    res.status(403)
    return res.json(err)
  }

  const { url, preview } = req.body;

  const spotImage = await SpotImage.create({
    spotId: req.params.spotId,
    url,
    preview
  })

  res.status(201);
  res.json(await SpotImage.findByPk(spotImage.id));
});

router.get('/:spotId/reviews', restoreUser, async (req, res) => {
  const reviews = await Review.findAll({
    where: {
      spotId: req.params.spotId
    },
    include: [{
      model: User,
      attributes: ['id', 'firstName', 'lastName']
    }, {
      model: ReviewImage,
      attributes: ['id', 'url']
    }]
  });

  if (!reviews.length) {
    const err = new Error();
    err.message = "Spot couldn't be found";
    res.status(404);
    return res.json(err);
  }

  res.json({ Reviews: reviews });
});

router.post('/:spotId/reviews', validateReview, restoreUser, async (req, res) => {
  const user = validateUser(req, res);

  const spot = await Spot.findByPk(req.params.spotId);
  const reviews = await Review.findAll({
    where: {
      userId: user.id,
      spotId: req.params.spotId
    }
  })

  if (!spot) {
    const err = new Error();
    err.message = "Spot couldn't be found";
    res.status(404);
    return res.json(err);
  }

  if (reviews.length) {
    const err = new Error();
    err.message = "User already has a review for this spot";
    res.status(500);
    return res.json(err);
  }

  const { review, stars } = req.body;

  const newReview = await Review.create({
    userId: user.id,
    spotId: req.params.spotId,
    review,
    stars
  })

  res.status(201);
  res.json(newReview)
})

router.post('/', validateSpots, restoreUser, async (req, res) => {
  const user = validateUser(req, res);
  
  const { address, city, state, country, lat, lng, name, description, price } = req.body;
  
  const spot = await Spot.create({
    ownerId: user.id,
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price
  });

  res.status(201);
  res.json(spot);
});

module.exports = router;
