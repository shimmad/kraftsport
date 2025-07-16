'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seguimiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //un seguimiento pertenece a un challenge
      Seguimiento.belongsTo(models.Challenge, { foreignKey: 'challenge_id' });
      //un seguimiento pertenece a un usuario
      Seguimiento.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
    }
  }
  Seguimiento.init({
    usuario_id: DataTypes.INTEGER,
    challenge_id: DataTypes.INTEGER,
    dia: DataTypes.INTEGER,
    completado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Seguimiento',
    indexes: [{unique: true, fields: ['challenge_id', 'usuario_id', 'dia']}]
    //necesito que para esata combinacion de atribuutos, solo exista un seguimiento (completaste el dia completo, no ejercicio individual)
  });
  return Seguimiento;
};