'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    return await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'www.youtube.com',
        preview: true
      },
      {
        spotId: 1,
        url: 'www.previewTesting.com',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://cdn.landsearch.com/listings/4szPz/large/king-nc-103305196.jpg',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://cdn.landsearch.com/listings/4rQXW/large/sparta-nc-101260044.jpg',
        preview: true
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
    })
  }
};