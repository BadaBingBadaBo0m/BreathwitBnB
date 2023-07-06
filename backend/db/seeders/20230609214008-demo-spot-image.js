'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    return await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'https://images1.loopnet.com/i2/7ju7Bf6QKVqwId5QSIHEL0oLr2YfsH1SbUZCjeXZnQo/117/office-property-for-lease-77-geary-st-san-francisco-ca-94108.jpg',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2023/05/correcto.jpg',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://crownworkspace.com/us/wp-content/uploads/sites/13/2020/10/cws-double-images-1024x560-2.png',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://media.istockphoto.com/id/1203922775/photo/interior-of-modern-office-building-during-the-day.jpg?s=612x612&w=0&k=20&c=cjgwZTearqRcSvrsMFmStadkSKignEkTsYwIDNQzZPA=',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://cdn.autonomous.ai/static/upload/images/common/upload/20220401/4-Office-Space-and-Office-Interior-Design-Ideas-for-2022_235a9f38141.jpg',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/f03b7134-1d8f-43eb-9ef8-5097b07acd9b.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/4314c021-d17e-47b8-9324-165d08ec4c8f.jpg?im_w=1440',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/c6912b16-69ef-4a98-94e9-40a394ac6156.jpg?im_w=1440',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/fd526f34-5674-41eb-aa03-92e0102d0163.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/c04b745a-ecbd-4ffe-a6b9-6c59605326b7.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://cdn.landsearch.com/listings/4rQXW/large/sparta-nc-101260044.jpg',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://cdn.landsearch.com/listings/4rQXW/large/sparta-nc-101260046.jpg',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://cdn.landsearch.com/listings/4rQXW/large/sparta-nc-101260048.jpg',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://cdn.landsearch.com/listings/4rQXW/large/sparta-nc-101260052.jpg',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://cdn.landsearch.com/listings/4rQXW/large/sparta-nc-101260058.jpg',
        preview: false
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
    })
  }
};