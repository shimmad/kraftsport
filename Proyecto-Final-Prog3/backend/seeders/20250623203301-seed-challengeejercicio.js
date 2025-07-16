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
   //voy a tener q implementar busqueda dinamica de challenge por id?
   const [challenge] = await queryInterface.sequelize.query(`SELECT * FROM "Challenges" WHERE "nombre" = 'JUNIO 2025' ;`);
   const challengeId = challenge[0].id;
   const [ejercicio] = await queryInterface.sequelize.query(`SELECT * FROM "Ejercicios" WHERE "nombre" = 'mejor postura' ;`);
   const ejercicioId = ejercicio[0].id;
   await queryInterface.bulkInsert('ChallengeEjercicio', [
    {
      challenge_id: challengeId,
      ejercicio_id: ejercicioId,
      posicion: 1,
      dia: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge_id: challengeId,
      ejercicio_id: ejercicioId,
      posicion: 1,
      dia: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
     
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ChallengeEjercicio', null, {});
  }
};
