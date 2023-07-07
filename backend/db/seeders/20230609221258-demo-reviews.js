'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    return await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 2,
        review: 'This place was fantastic',
        stars: 5,
        createdAt: new Date('2023-04-10'),
        createdAt: new Date('2023-04-10')
      },
      {
        spotId: 2,
        userId: 2,
        review: 'A possum got in and ruined our night would not recommend until they have fixed that issue.',
        stars: 2,
        createdAt: new Date('2023-04-26'),
        createdAt: new Date('2023-04-26')
      },
      {
        spotId: 2,
        userId: 3,
        review: "I recently had the pleasure of staying at the Tiny Log Cabin and it was an absolute delight. Tucked away in a tranquil corner of nature, this cozy retreat exceeded all expectations. The cabin's rustic charm and meticulous design created a warm and inviting atmosphere. Despite its small size, it felt surprisingly spacious and had everything I needed for a comfortable stay. The location was truly remarkable, surrounded by towering trees and breathtaking natural beauty. Waking up to the sounds of nature and enjoying my morning coffee on the private patio was a rejuvenating experience. The host's hospitality was outstanding, ensuring a seamless and enjoyable stay. From the well-stocked amenities to the thoughtful recommendations, every detail was carefully considered. If you're seeking a serene and idyllic getaway, the Tiny Log Cabin is the perfect choice. I can't wait to return and create more treasured memories in this hidden haven.",
        stars: 5,
        createdAt: new Date('2023-06-22'),
        createdAt: new Date('2023-06-22')
      },
      {
        spotId: 2,
        userId: 3,
        review: 'Testing',
        stars: 4,
        createdAt: new Date('2023-05-22'),
        createdAt: new Date('2023-05-22')
      },
      {
        spotId: 3,
        userId: 1,
        review: 'This utterly massive cabin was a joy for my family',
        stars: 5,
        createdAt: new Date('2023-05-03'),
        createdAt: new Date('2023-05-03')
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
    })
  }
};