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
      },
      {
        categoryName: "OMG!"
      },
      {
        categoryName: "Vineyards"
      },
      {
        categoryName: "Surfing"
      },
      {
        categoryName: "Amazing Views"
      },
      {
        categoryName: "Amazing Pools"
      },
      {
        categoryName: "Lakefront"
      },
      {
        categoryName: "Mansions"
      },
      {
        categoryName: "Play"
      },
      {
        categoryName: "Countryside"
      },
      {
        categoryName: "Camping"
      },
      {
        categoryName: "Tiny Homes"
      },
      {
        categoryName: "Castles"
      },
      {
        categoryName: "Off-the-grid"
      },
      {
        categoryName: "National Parks"
      },
      {
        categoryName: "Boats"
      },
      {
        categoryName: "Farms"
      },
      {
        categoryName: "Design"
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

// 'use strict';

// /** @type {import('sequelize-cli').Migration} */

// let options = {};
// if (process.env.NODE_ENV === 'production') {
//   options.schema = process.env.SCHEMA;
// }

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     options.tableName = "SpotCategories";
//     return await queryInterface.bulkInsert(options, [
//       {
//         spotId: 1,
//         categoryId: 1
//       }
//     ])
//   },

//   async down(queryInterface, Sequelize) {
//     options.tableName = "SpotCategories";
//     const Op = Sequelize.Op;
//     return await queryInterface.bulkDelete(options, {
//       spotId: {
//         [Op.in]: [
//           1
//         ]
//       }
//     })
//   }
// };
