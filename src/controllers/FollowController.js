import FollowService from '../services/FollowService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import FollowSerializer from '../serializers/FollowSerializer.js';

class FollowController {
  async follow(req, res, next) {
    const { id } = req.body;
    const follow = await FollowService.follow(req.user.id, id);
    const serializer = new FollowSerializer({
      attributes: follow, link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async approve(req, res, next) {
    const { id } = req.body;
    const follow = await FollowService.approve(req.user.id, id);
    const serializer = new FollowSerializer({
      attributes: follow, link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async unfollow(req, res, next) {
    const { id } = req.body;
    const follow = await FollowService.unfollow(req.user.id, id);
    const serializer = new FollowSerializer({
      attributes: follow, link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }
}
export default new FollowController();
