import Follow from '../models/follow.js';

class FollowedService {
  async follow(firstUserId, secondUserId) {
    await Follow.create({
      followerId: firstUserId, followingId: secondUserId, approved: 0,
    });
    return { resultCode: 0 };
  }

  async approved(firstUserId, secondUserId) {
    const approvedFollow = await Follow.findOne({
      where: {
        followerId: secondUserId,
        followingId: firstUserId,
      },
    });
    if (!approvedFollow) {
      throw new Error('Такой связи не существует');
    }
    await approvedFollow.update({ approved: (new Date()).toString() });
    return { resultCode: 0 };
  }

  async unfollow(unSubscriberId, userId) {
    const deletedConnection = await Follow.findOne({
      where: {
        followerId: userId,
        followingId: unSubscriberId,
      },
    });
    if (!deletedConnection) {
      const deletedConnection = await Follow.findOne({
        where: {
          followerId: unSubscriberId,
          followingId: userId,
        },
      });
      console.log(deletedConnection.approved);
      if (deletedConnection.approved === '0') {
        await deletedConnection.destroy();
        return { resultCode: 0 };
      }
      await deletedConnection.update({ userId1: userId, userId2: unSubscriberId, approved: 0 });
      return { resultCode: 0 };
    }
    await deletedConnection.update({ approved: 0 });
    return { resultCode: 0 };
  }
}
export default new FollowedService();