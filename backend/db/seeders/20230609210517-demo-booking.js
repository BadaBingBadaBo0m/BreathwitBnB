'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    return await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 2,
        startDate: new Date('2021-11-19'),
        endDate: new Date('2021-11-20')
      },
      // {
      //   spotId: 3,
      //   userId: 1,
      //   startDate: new Date('2023-8-10'),
      //   endDate: new Date('2023-8-15')
      // }
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [2] }
    })
  }
};
