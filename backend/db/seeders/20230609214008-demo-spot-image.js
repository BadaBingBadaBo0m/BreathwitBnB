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
      },
      // SPOT 6
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/305722b1-3fb6-4bbd-820a-65a36489584e.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-23387337/original/244cd4b6-da7d-4f9d-9a45-442cb7a1b02d.jpeg?im_w=1200',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-23387337/original/667568f5-ae33-45d4-8d8a-f75e25ab04c6.jpeg?im_w=1200',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-23387337/original/4bad2d23-eb98-47e8-9c0a-94621e36a30a.jpeg?im_w=720',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-23387337/original/63d437bd-0b94-4a8b-99df-6ca76214926e.jpeg?im_w=1200',
        preview: false
      },
      // SPOT 7
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-732524990468985063/original/da4ca419-7cc7-4587-8a17-328a7184e55e.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-732524990468985063/original/a84b5c1c-e8da-47c4-bbea-137a789937f7.jpeg?im_w=1440',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-732524990468985063/original/98a922df-951f-48f5-a339-b7b1a35117f3.jpeg?im_w=1440',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-732524990468985063/original/1cf04f36-e9e8-43b7-af30-91270e1621e8.jpeg?im_w=1440',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-732524990468985063/original/69955681-0072-41a5-a5f5-1612b2266bff.jpeg?im_w=1440',
        preview: false
      },
      // SPOT 8
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-54077857/original/6f2fd680-6926-4be4-b5a7-986dab3a6e4e.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-54077857/original/48d45825-28a7-4c2b-a2b8-944ccfe90a43.jpeg?im_w=1440',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-54077857/original/3419851f-f186-4ba5-a622-baf79c589267.jpeg?im_w=1440',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-54077857/original/2fd5760a-0166-4291-b516-c192367f9669.jpeg?im_w=1440',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-54077857/original/5a9e19ff-9405-4273-b379-880eb60be887.jpeg?im_w=1440',
        preview: false
      },
      // SPOT 9
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/d7f2828f-3287-4d8c-ba1a-8222e0dfdbdc.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/b112c5d3-7773-4a53-b592-204c9e6b9b4c.jpg?im_w=1440',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/060a89ae-7621-4975-b6ec-b6c27a6ba4b4.jpg?im_w=1200',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/b3a76c33-8ebe-4ed7-8fbc-8670b946e4a6.jpg?im_w=1440',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/72d8ed5a-d507-43f6-8daf-94a9129396f6.jpg?im_w=1440',
        preview: false
      },
      // SPOT 10
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-886928101478680382/original/8455637c-8cf9-439a-99c5-017096dc610f.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-886928101478680382/original/436b2df2-226b-4e2d-a7ec-57375b0f98ce.jpeg?im_w=1440',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-886928101478680382/original/ed1bf4a7-7188-4023-91ed-8a6e47e40dfe.jpeg?im_w=1440',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-886928101478680382/original/7b49e25a-5759-40d2-b52e-bd38be63db60.jpeg?im_w=1440',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-886928101478680382/original/e4c30502-dc76-4fc0-9a57-2caa3f834dce.jpeg?im_w=1440',
        preview: false
      },
      // SPOT 11
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48095114/original/db08478d-ea4a-4e95-81ba-58e485f5f087.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48095114/original/abe36681-4413-4a9c-92f8-5ccf1c17675d.jpeg?im_w=1440',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/210f8abe-a988-4f15-afb0-da3cf70dac76.jpg?im_w=1440',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/45556197-2ede-4acf-85ad-2b4e043b55fd.jpg?im_w=1440',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/6462e7e5-436e-452b-94a7-bcd772ac1e5f.jpg?im_w=1440',
        preview: false
      },
      // SPOT 12
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-664701546220958580/original/a9b473de-3bbe-470a-879d-2339aa487878.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-664701546220958580/original/1b5892f9-1bc2-4ac5-a841-831ff9d1b8f6.jpeg?im_w=1440',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-664701546220958580/original/24be16cb-7ccd-4b60-9cd7-e07ad8fed830.jpeg?im_w=1440',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-664701546220958580/original/4efebbe5-3f95-4cbe-841f-2acbd7e9d1da.jpeg?im_w=1440',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-664701546220958580/original/8d5f48f2-a7a8-42ab-b34f-c983e89aa3d2.jpeg?im_w=1440',
        preview: false
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
    })
  }
};