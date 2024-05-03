'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Categories";
    return await queryInterface.bulkInsert(options, [
      {
        categoryName: "Beachfront"
      },
      {
        categoryName: "Cabins"
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Categories";
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      categoryName: {
        [Op.in]: [
          "Beachfront",
          "Cabins"
        ]
      },
    })
  }
};
