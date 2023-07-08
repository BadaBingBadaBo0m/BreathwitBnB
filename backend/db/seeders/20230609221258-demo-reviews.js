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
      },
      {
        spotId: 4,
        userId: 7,
        review: "I had the pleasure of staying at this modern tiny house Airbnb, and it was a delightful experience. The sleek design and clever use of space created a cozy yet contemporary atmosphere. The amenities were top-notch, and every corner of the house was thoughtfully curated for comfort and convenience. Despite its compact size, the house felt open and airy, with large windows inviting plenty of natural light inside. The host's attention to detail and responsiveness made my stay even more enjoyable. If you're seeking a stylish and efficient retreat, this modern tiny house is the perfect choice.",
        stars: 5,
        createdAt: new Date('2023-03-08'),
        createdAt: new Date('2023-03-08')
      },
      {
        spotId: 4,
        userId: 10,
        review: "I recently stayed at this modern tiny house Airbnb, and while it had its positive aspects, there were a few drawbacks that impacted my overall experience. The design of the house was sleek and contemporary, and the efficient use of space was commendable. However, I found the amenities to be somewhat lacking, and the size of the house felt restrictive for an extended stay. Additionally, there were some maintenance issues that needed attention. Although the host was responsive, these inconveniences did detract from the overall enjoyment of my stay. If you're looking for a minimalist experience and don't mind some limitations, this modern tiny house could still be an option, but it may not be the best fit for everyone.",
        stars: 3,
        createdAt: new Date('2023-06-25'),
        createdAt: new Date('2023-06-25')
      },
      {
        spotId: 4,
        userId: 8,
        review: "I recently had a pleasant stay at this modern tiny house Airbnb, and it left a positive impression overall. The sleek and contemporary design of the house was visually appealing, and the efficient use of space was impressive. The amenities provided were adequate for a comfortable stay, and the large windows allowed plenty of natural light to brighten the interior. Although there were a few minor issues during my visit, the host was responsive and resolved them promptly. If you're looking for a modern and cozy retreat, this tiny house offers a solid option for a pleasant stay.",
        stars: 4,
        createdAt: new Date('2023-04-12'),
        createdAt: new Date('2023-04-12')
      },
      {
        spotId: 4,
        userId: 8,
        review: "I recently stayed at this modern tiny house Airbnb, and while it had its positive aspects, there were a few drawbacks that affected my overall experience. The design of the house was sleek and contemporary, which I appreciated. However, the limited space felt a bit confining, especially for a longer stay. Additionally, I encountered some issues with cleanliness and maintenance that needed attention. Although the host was responsive to my concerns, these factors did impact my enjoyment of the stay. If you're looking for a minimalist experience and are comfortable with potential limitations, this modern tiny house might still be worth considering, but it may not be the best fit for everyone.",
        stars: 3,
        createdAt: new Date('2023-04-15'),
        createdAt: new Date('2023-04-15')
      },
      {
        spotId: 5,
        userId: 3,
        review: "I recently had an amazing stay at this modern A-frame cabin Airbnb and I can't recommend it enough. The unique design of the cabin, with its iconic A-frame structure, added a charming touch to the overall experience. The interior was tastefully decorated and had a cozy yet contemporary vibe. The cabin was well-equipped with all the necessary amenities and provided a comfortable and relaxing retreat. The surrounding natural beauty was breathtaking, and I loved waking up to the stunning views from the large windows. The host was incredibly accommodating and made sure I had everything I needed for a perfect stay. If you're seeking a peaceful getaway in a stylish and idyllic setting, this modern A-frame cabin is an absolute gem.",
        stars: 5,
        createdAt: new Date('2023-1-30'),
        createdAt: new Date('2023-1-30')
      },
      {
        spotId: 5,
        userId: 6,
        review: "I recently enjoyed my stay at this modern A-frame cabin Airbnb, and it was mostly a positive experience. The unique design of the cabin was visually appealing, and the interior had a cozy and contemporary feel. The amenities provided were generally satisfactory, although there were a few minor areas where improvements could be made. Additionally, while the cabin offered beautiful views and a tranquil atmosphere, there were some occasional noise disturbances from nearby activities. Despite these minor drawbacks, the host was responsive and helpful throughout my stay. If you're looking for a stylish and distinctive retreat, this modern A-frame cabin could be a great choice with a few minor caveats.",
        stars: 4,
        createdAt: new Date('2023-3-30'),
        createdAt: new Date('2023-3-30')
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