/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Dialogs', [
      {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Dialogs', null);
  },
};
