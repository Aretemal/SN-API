import UsersSerializer from '../serializers/UsersSerializer.js';
import UserService from '../services/UserService.js';
import UserSerializer from '../serializers/UserSerializer.js';

class UserController {
  async getOne(req, res, next) {
    const user = await UserService.getOne(req.params.id);
    req.serializer = new UserSerializer(user, req);
    next();
  }

  async getAllUsers(req, res, next) {
    const collection = await UserService.getAllUsers(req.user.id, req.query);
    req.serializer = new UsersSerializer(
      collection.users,
      UserSerializer,
      collection.countOfUsers,
      req,
    );
    next();
  }
}
export default new UserController();
