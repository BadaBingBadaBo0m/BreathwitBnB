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
        city: 'Houma',
        state: 'Louisiana',
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
        name: 'Latitude Adjustment Luxury Waterfront Home',
        description: "Welcome to Latitude Adjustment! This home's stunning architecture lends the feel of a mountain getaway with all the perks of the warm weather and sunshine Lake Norman has to offer. Meticulously designed, the luxury bath home provides panoramic views. The open floor plan and abundance of outdoor decking overlooking the lake are perfect for hosting family and friends for your next getaway.",
        price: '1,477'
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