'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    burgerName: {type:DataTypes.STRING, allowNull:false},
    devoured: {type: DataTypes.BOOLEAN, defaultValue:false}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};
