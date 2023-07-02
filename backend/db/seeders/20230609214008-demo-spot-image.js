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
        url: 'https://www.lenconnect.com/gcdn/authoring/2012/12/06/NDAT/ghows-MI-f3c8796b-c029-4e48-abed-1cb60d98d49d-461a4e27.jpeg?width=576&height=384&fit=crop&format=pjpg&auto=webp',
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
        url: 'https://cdn.landsearch.com/listings/4szPz/large/king-nc-103305196.jpg',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://cdn.landsearch.com/listings/4rQXW/large/sparta-nc-101260044.jpg',
        preview: true
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