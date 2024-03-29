/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Follows', [
      {
        followerId: 1,
        followingId: 2,
        approvedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followerId: 1,
        followingId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        followerId: 4,
        followingId: 1,
        approvedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        followerId: 5,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        followerId: 3,
        followingId: 6,
        approvedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Follows', null);
  },
};
