'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 1) Crear la tabla
    await queryInterface.createTable('Seguimientos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      challenge_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Challenges',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      dia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      completado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });

    // 2) Agregar la restricción de unicidad (un seguimiento por usuario/desafío/día)
    await queryInterface.addConstraint('Seguimientos', {
      fields: ['usuario_id', 'challenge_id', 'dia'],
      type: 'unique',
      name: 'unico_seguimiento_por_usuario_challenge_dia',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seguimientos');
  },
};
