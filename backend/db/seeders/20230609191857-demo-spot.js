'use strict';

const { Spot } = require('../models');

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up (queryInterface, Sequelize) {
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
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      address: { [Op.in]: ['123 Disney Lane', '1176 Briarcreek Rd', '336 Joes Way'] }
    })
  }
};