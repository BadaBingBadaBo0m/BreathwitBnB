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
        userId: 5,
        review: "I recently had the pleasure of staying at the Tiny Log Cabin and it was an absolute delight. Tucked away in a tranquil corner of nature, this cozy retreat exceeded all expectations. The cabin's rustic charm and meticulous design created a warm and inviting atmosphere. Despite its small size, it felt surprisingly spacious and had everything I needed for a comfortable stay. The location was truly remarkable, surrounded by towering trees and breathtaking natural beauty. Waking up to the sounds of nature and enjoying my morning coffee on the private patio was a rejuvenating experience. The host's hospitality was outstanding, ensuring a seamless and enjoyable stay. From the well-stocked amenities to the thoughtful recommendations, every detail was carefully considered. If you're seeking a serene and idyllic getaway, the Tiny Log Cabin is the perfect choice. I can't wait to return and create more treasured memories in this hidden haven.",
        stars: 5,
        createdAt: new Date('2023-06-22'),
        createdAt: new Date('2023-06-22')
      },
      {
        spotId: 2,
        userId: 3,
        review: 'Nestled in a serene woodland setting, this tiny log cabin with a firepit Airbnb was an absolute gem. The rustic exterior and tastefully designed interior created a cozy ambiance, while the firepit area outside provided the perfect spot to unwind under the stars. The attentive host and ideal location for outdoor activities made it a magical retreat that I highly recommend.',
        stars: 4,
        createdAt: new Date('2023-05-22'),
        createdAt: new Date('2023-05-22')
      },
      {
        spotId: 2,
        userId: 6,
        review: "Escape to tranquility at this enchanting tiny log cabin with a firepit Airbnb. Tucked away in a serene woodland, the cozy interior and rustic charm offer a perfect retreat. Whether you're roasting marshmallows by the fire or exploring the nearby outdoor wonders, this hidden gem promises a magical and rejuvenating getaway.",
        stars: 5,
        createdAt: new Date('2023-04-30'),
        createdAt: new Date('2023-04-30')
      },
      {
        spotId: 3,
        userId: 1,
        review: 'This utterly massive cabin was a joy for my family',
        stars: 5,
        createdAt: new Date('2023-05-03'),
        createdAt: new Date('2023-05-03')
      },
      {
        spotId: 3,
        userId: 11,
        review: "rustic luxury at its finest within the embrace of nature at this magnificent mansion. From the moment you step inside, you'll be captivated by its breathtaking architecture, lavish furnishings, and expansive grounds. With its elegant interiors and serene outdoor spaces, this retreat offers an unforgettable experience, seamlessly blending sophistication with the tranquil beauty of its surroundings.",
        stars: 5,
        createdAt: new Date('2023-01-13'),
        createdAt: new Date('2023-01-13')
      },
      {
        spotId: 3,
        userId: 8,
        review: "I had the most incredible experience staying at this breathtaking mansion, tucked away in a picturesque natural setting. From the moment I set foot inside, I was mesmerized by its rustic charm and grandeur. The tastefully decorated interiors and attention to detail added a touch of elegance to the entire space. With its sprawling grounds and tranquil atmosphere, this retreat provided the perfect escape from the chaos of everyday life. Whether I was lounging in the luxurious living areas, exploring the enchanting surroundings, or simply taking in the beauty of nature from the expansive windows, every moment spent here felt like a true indulgence. If you're looking for a combination of rustic luxury and a deep connection to nature, this mansion is an absolute dream come true.",
        stars: 5,
        createdAt: new Date('2023-07-05'),
        createdAt: new Date('2023-07-05')
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