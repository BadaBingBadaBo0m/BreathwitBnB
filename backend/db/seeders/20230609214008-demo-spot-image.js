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
      // SPOT 1
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
      // SPOT 2
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
      // SPOT 3
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
      },
      // SPOT 4 
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-35484995/original/04ce5de7-5828-4353-870d-3971af6e50b1.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/d7b3a602-c191-4019-aa50-200ecfabb80b.jpg?im_w=1440',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/114314cd-30fa-4654-a392-49eb5e774ca8.jpg?im_w=1440',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/3f1ee851-7869-414a-89df-5e11f87039e9.jpg?im_w=1440',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-35484995/original/5cb411cc-8f6c-4a80-a31b-95afec059114.jpeg?im_w=1440',
        preview: false
      },
      // SPOT 5
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/412bc3e6-705d-465b-8a95-2ffcc9a70ffc.jpg?im_w=1200',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/14b6131c-bb98-48c7-917e-fcbf7b8ef0ab.jpg?im_w=1440',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/af516f28-3a9f-47f3-be6e-7ca77b12b2a9.jpg?im_w=1440',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/c110b802-737a-427c-b533-78d0dbafa196.jpg?im_w=1440',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/0f729bfb-9d43-45e7-9f72-d54d7cda8a49.jpg?im_w=1440',
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