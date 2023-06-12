'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    return await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 2,
        review: 'This place was fantastic',
        stars: 5
      },
      {
        spotId: 2,
        userId: 3,
        review: 'Wonderful cabin',
        stars: 5
      },
      {
        spotId: 3,
        userId: 1,
        review: 'This utterly massive cabin was a joy for my family',
        stars: 5
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
    })
  }
};