const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');

const { Spot, Review, SpotImage, ReviewImage, User } = require('../../db/models');

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

router.get('/', async (req, res) => {
  const spots = await Spot.findAll();
  
  res.json({ Spots: await avgRatingAndPreviewImg(spots) });
});

router.post('/:spotId/images', validateSpotImage, restoreUser, async (req, res) => {
  const user = validateUser(req, res);

  const spot = await Spot.findByPk(req.params.spotId);

  if (!spot) {
    const err = new Error();
    err.message = "Spot couldn't be found";
    res.status(404)
    return res.json(err)
  }

  if (spot.ownerId !== user.id) {
    const err = new Error();
    err.status = 401;
    err.message = 'Authentication required';
    res.status(401)
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
