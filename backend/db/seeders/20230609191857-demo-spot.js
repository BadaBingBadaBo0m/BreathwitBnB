'use strict';

const { Spot } = require('../models');

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Spots';
    return await queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        categoryId: 1,
        address: '123 Disney Lane',
        city: 'San Francisco',
        state: 'California',
        country: 'United States of America',
        lat: 37.7645358,
        lng: -122.4730327,
        name: 'App Academy',
        description: 'Place where web developers are created',
        price: 123
      },
      {
        ownerId: 2,
        address: '1176 Briarcreek Rd',
        city: 'King',
        state: 'North Carolina',
        country: 'United States of America',
        lat: 36.3259,
        lng: -80.3641,
        name: 'Rustic log Cabin',
        description: 'A lovely cabin in the woods perfect for anyone wanting to get away from it all.',
        price: 90
      },
      {
        ownerId: 3,
        address: '336 Joes Way',
        city: 'Sparta',
        state: 'North Carolina',
        country: 'United States of America',
        lat: 36.4404,
        lng: -81.1421,
        name: 'Rustic mansion',
        description: "A massive cabin center in the middle of nowhere, perfect for any big family's weekend getaway",
        price: 200
      },
      {
        ownerId: 1,
        address: '606 W Screven St',
        city: 'Quitman',
        state: 'Georgia',
        country: 'United States of America',
        lat: 30.785058,
        lng: -83.565056,
        name: 'Modern Tiny House in the Trees',
        description: "You'll feel like you're getting away from it all in this modern, private tiny house in the trees (even though you're minutes from Duke, and downtown Durham, and loads of shopping and restaurants). All the right amenities are here - full kitchen, laundry, A/C, and high-speed internet - but don't be surprised if you find yourself opting to relax in the swing on the screened-in porch while you soak in the sounds of the birds and the trees instead.",
        price: 264
      },
      {
        ownerId: 1,
        address: '11613 Reisterstown Rd',
        city: 'Reisterstown',
        state: 'Maryland',
        country: 'United States of America',
        lat: 39.441535,
        lng: -76.80683,
        name: 'Lake Therapy',
        description: "Take a breath by the lake at this adorable A-frame cabin - ideal for a family vacation or couple's retreat! Enjoy open, sunlit spaces, spectacular views of Norris Lake, and plenty of desirable amenities both inside and out. Prepare your favorite recipes in the well-equipped, full kitchen with a breakfast bar, dine together indoors at the table for four or indulge in an al fresco experience out on the deck, and then settle in for movie nights in the lower-level living area, or build a fire in the main level fireplace and spend some quality time together. Back outside, enjoy a soothing soak in your private hot tub, hike on the many neighboring walking paths, and then head to the firepit in the yard to roast marshmallows and count the stars in the night sky. This home is less than half a mile from Anderson County Park where you'll find a swimming area, picnic area, boat launch, and playground.",
        price: 136
      },
      {
        ownerId: 1,
        address: '5004 Imperial Dr',
        city: 'Clyde',
        state: 'North Carolina',
        country: 'United States of America',
        lat: 29.599956,
        lng: -90.757981,
        name: 'Jewel in the Skye',
        description: "Tucked Away in the rolling pastures and outstanding mountain views is a beautiful romantic vacation home with a superb proximity to Waynesville, Maggie Valley & Asheville. A deluxe retreat is spot on for 2 people in its sensational bedroom. The décor combines rustic feel with grand furniture and luxurious soft furnishing. Spacious living spaces are tastefully decorated in an aristocratic style. Amazing home surrounded by layers of mountain views and perfect for those who love the outdoors.",
        price: 175
      },
      {
        ownerId: 1,
        address: '1165 Ross Clark Cir',
        city: 'Dothan',
        state: 'North Carolina',
        country: 'United States of America',
        lat: 28.620377,
        lng: -80.832055,
        name: 'Unique Container Retreat',
        description: 'Designed and built by 3 siblings, so much hard work and thoughtful consideration went into creating this magnificent retreat! We are SO excited for you and your loved ones to come and experience this unique and fun stay!',
        price: 411
      },
      {
        ownerId: 2,
        address: '809 Summit Ave',
        city: 'Mooresville',
        state: 'North Carolina',
        country: 'United States of America',
        lat: 36.08309,
        lng: -79.778255,
        name: 'Luxury Waterfront Home',
        description: "Welcome to Latitude Adjustment! This home's stunning architecture lends the feel of a mountain getaway with all the perks of the warm weather and sunshine Lake Norman has to offer. Meticulously designed, the luxury bath home provides panoramic views. The open floor plan and abundance of outdoor decking overlooking the lake are perfect for hosting family and friends for your next getaway.",
        price: 980
      },
      {
        ownerId: 2,
        address: '13330 Ranchero Rd',
        city: 'Asheville',
        state: 'North Carolina',
        country: 'United States of America',
        lat: 34.383656,
        lng: -117.371084,
        name: 'Sanctuary - Earth & Sky Dwellings',
        description: "Take in the rustic, fairy tale vibe of this custom-made treehouse in the midst of towering white oaks. Recline in a rocking chair and watch the sunset over the mountains, or try your hand at some stargazing from the comfort of the deluxe double bed.",
        price: 380
      },
      {
        ownerId: 2,
        address: '3606 Willow Pass Rd',
        city: 'Concord',
        state: 'California',
        country: 'United States of America',
        lat: 37.986593,
        lng: -122.009953,
        name: 'Mountain View Glamping Dome',
        description: 'Looking for a one-of-a-kind getaway? Well this is the one! Come glamp at our luxurious glamping dome that has all the amenities to make your trip one to remember. The huge bay window allows you to experience beautiful mountain sunrises and sunsets from the comfort of the couch. You can also relax in the outdoor hot tub, firepit, or ENO hammock to truly feel connected to the mountain view. Enjoy being only 20 minutes to downtown Asheville while feeling like you are in your own oasis.',
        price: 389
      },
      {
        ownerId: 3,
        address: '21506 Victory Blvd',
        city: 'Lexington',
        state: 'North Carolina',
        country: 'United States of America',
        lat: 41.597329,
        lng: -73.113486,
        name: 'Heaven Hill',
        description: "There's NOTHING better than a vacation at High Rock Lake! Heaven Hill is a true getaway that will melt away the stress. This waterfront oasis not only offers a private dock in a large quiet cove, fire pit, screened-in porch, and plenty of areas to unwind, it also gives plenty of space for memories and reflection! Located just minutes from Childress Vineyards, Salisbury, and historic Lexington, and roughly 35 minutes from major cities including Charlotte, Winston Salem, and Greensboro/High Point",
        price: 216
      },
      {
        ownerId: 3,
        address: '4800 E Huron River Dr',
        city: 'Ann Arbor',
        state: 'Michigan',
        country: 'United States of America',
        lat: 42.264352,
        lng: -83.664622,
        name: 'Modern Cabin w/ Amazing Mountain Views!',
        description: "Get ready to be blown away by Blue Ridge's best mountain views. The Sky Loft is a modern, luxurious cabin that was created to be a place to relax and have fun.",
        price: 435
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      ownerId: { [Op.in]: [1, 2, 3] }
    })
  }
};
