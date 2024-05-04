'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "SpotCategories";
    return await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        categoryId: 1
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "SpotCategories";
    return await queryInterface.bulkDelete(options, {
      spotId: {
        [Op.in]: [
          1
        ]
      }
    })
  }
};
