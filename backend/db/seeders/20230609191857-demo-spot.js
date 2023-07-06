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