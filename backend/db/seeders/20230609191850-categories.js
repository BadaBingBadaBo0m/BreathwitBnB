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
        categoryName: "Beachfront",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbBeachfront.jpg"
      },
      {
        categoryName: "Cabins",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbCabins.jpg"
      },
      {
        categoryName: "OMG!",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbOMG.jpg"
      },
      {
        categoryName: "Vineyards",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbVineyards.jpg"
      },
      {
        categoryName: "Surfing",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbSurfing.jpg"
      },
      {
        categoryName: "Amazing Views",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbAmazingViews.jpg"
      },
      {
        categoryName: "Amazing Pools",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbAmazingPools.jpg"
      },
      {
        categoryName: "Lakefront",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbLakeFront.jpg"
      },
      {
        categoryName: "Mansions",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbMansions.jpg"
      },
      {
        categoryName: "Play",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbPlay.jpg"
      },
      {
        categoryName: "Countryside",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbCountrySide.jpg"
      },
      {
        categoryName: "Camping",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbCamping.jpg"
      },
      {
        categoryName: "Tiny Homes",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbTinyHomes.jpg"
      },
      {
        categoryName: "Castles",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbCastles.jpg"
      },
      {
        categoryName: "Off-the-grid",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbOffTheGrid.jpg"
      },
      {
        categoryName: "National Parks",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbNationalParks.jpg"
      },
      {
        categoryName: "Boats",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbBoats.jpg"
      },
      {
        categoryName: "Farms",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbFarms.jpg"
      },
      {
        categoryName: "Design",
        categoryPicture: "https://breathwit-bnb.s3.amazonaws.com/bnbDesign.jpg"
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Categories";
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      categoryName: {
        [Op.in]: [
          "Beachfront",
          "Cabin"
        ]
      },
    })
  }
};
