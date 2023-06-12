'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'ReviewImages';
    return await queryInterface.bulkInsert(options, [
      {
        reviewId: 1,
        url: 'www.youtube.com'
      },
      {
        reviewId: 2,
        url: 'https://cdn.landsearch.com/listings/4szPz/large/king-nc-103305205.jpg'
      },
      {
        reviewId: 3,
        url: 'https://cdn.landsearch.com/listings/4rQXW/large/sparta-nc-101260046.jpg'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'ReviewImages';
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      url: { [Op.in]: ['www.youtube.com', 'https://cdn.landsearch.com/listings/4szPz/large/king-nc-103305205.jpg', 'https://cdn.landsearch.com/listings/4rQXW/large/sparta-nc-101260046.jpg'] }
    });
  }
};