import { validationResult } from 'express-validator';
import CollectionSerializer from '../serializers/CollectionSerializer.js';
import DialogSerializer from '../serializers/DialogSerializer.js';
import MessageSerializer from '../serializers/MessageSerializer.js';
import DialogService from '../services/DialogService.js';

class DialogController {
  async sendMessage(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const message = await DialogService.sendMessage(req.body, req.params.id, req.user.id);
    req.serializer = new MessageSerializer(message, req);
    next();
  }

  async getAllDialogs(req, res, next) {
    const users = await DialogService.getAllDialogs(req.user.id);
    req.serializer = new CollectionSerializer(users, DialogSerializer, req);
    next();
  }

  async getAllMessage(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { messages, users } = await DialogService.getAllMessage(req.params.id);
    req.serializer = new CollectionSerializer(messages, MessageSerializer, req, null, users);
    next();
  }
}
export default new DialogController();
