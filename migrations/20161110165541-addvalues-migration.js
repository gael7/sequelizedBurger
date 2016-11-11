'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Burgers', [{
      burgerName: 'Hot and Spicy Burger', createdAt: new Date(), updatedAt: new Date()},
      {burgerName: 'Double Cheese Burger', createdAt: new Date(), updatedAt: new Date()},
      {burgerName: 'Double Quarter Pounder', createdAt: new Date(), updatedAt: new Date()}], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
