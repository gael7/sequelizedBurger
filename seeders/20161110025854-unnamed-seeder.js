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
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Burgers');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
