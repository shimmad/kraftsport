'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ejercicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ejercicio.belongsToMany(models.Challenge, {through: 'ChallengeEjercicio', foreignKey: 'ejercicio_id'});
    }
  }
  //que pasa si dsps queiro agregar mas campos? como duracion
  Ejercicio.init({
    nombre: DataTypes.STRING,
    tipo: DataTypes.STRING, //Warmup, Fullbody, LowerBody, UpperBody, Flexibility
    video_url: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Ejercicio',
  });
  return Ejercicio;
};