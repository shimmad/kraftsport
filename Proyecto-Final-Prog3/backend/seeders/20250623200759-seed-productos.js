'use strict';

const { create } = require('lodash');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Productos', [
    {
      nombre: 'mancuernas de pilates 2kg',
      descripcion: 'mancuernas violates de 2kg',
      precio: 11.99,
      img: 'https://i5.walmartimages.com/asr/79f10782-a64a-4fa9-860c-b907de993f93.a11684df1b771e6e991611f8f70b59b6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      nombre: 'banda elastica',
      descripcion: 'banda para entrenar lowerbody',
      precio: 14.99,
      img: 'https://chirinodeportes.com.ar/wp-content/uploads/2021/11/fghfghfghfhf-600x600.jpg',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      nombre: 'colchoneta de yoga ',
      descripcion: 'colchoneta de yoga',
      precio: 39.99,
      img: 'https://i0.wp.com/promarketgo.com/wp-content/uploads/2022/02/colchonetas-1.jpg?resize=300%2C300&ssl=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'mancuernas de pilates 5kg',
      descripcion: 'mancuernas violates de 5kg',
      precio: 20.99,
      img: 'https://i5.walmartimages.com/asr/c33a5fc4-3467-4890-b543-14c4518b689b.7947ca160bdd4cff8339a79b4c4be027.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      createdAt: new Date(),
      updatedAt: new Date()
    }

   ]
   )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Productos', null, {});
  }
};
