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
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'ReviewImages';
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      url: { [Op.in]: ['www.youtube.com'] }
    });
  }
};