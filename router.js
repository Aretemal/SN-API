import Router from 'express';
import { check, param, body } from 'express-validator';
import DialogController from './src/controllers/DialogController.js';
import FollowController from './src/controllers/FollowController.js';
import PostController from './src/controllers/PostController.js';
import ProfileController from './src/controllers/ProfileController.js';
import UserController from './src/controllers/UserController.js';
import AuthController from './src/controllers/AuthController.js';
import { tryCatch } from './src/utils/tryCatch.js';

const router = new Router();
router.post('/registration', [
  check('login', '430').notEmpty(),
  check('firstName', '431').notEmpty(),
  check('lastName', '432').notEmpty(),
  check('email', '433').notEmpty(),
  check('password', '434').isLength({ min: 4 }),
], tryCatch(AuthController.registration));
router.post('/login', [
  check('login', '430').notEmpty(),
  check('password', '434').isLength({ min: 4 }),
], tryCatch(AuthController.login));

router.get('/user/:id', tryCatch(UserController.getOne));
router.get('/users', tryCatch(UserController.getAllUsers));

router.post('/profile/posts', [
  check('newMessageText', '435').notEmpty().isLength({ max: 400 }),
], tryCatch(PostController.create));
router.get('/profile/posts', tryCatch(PostController.getAll));
router.get('/profile/posts/:id', [
  param('id', '436').notEmpty(),
], tryCatch(PostController.getOne));
router.put('/profile/posts/:id', tryCatch(PostController.update));
router.delete('/profile/posts/:id', tryCatch(PostController.delete));

router.get('/profile/user', tryCatch(ProfileController.getInfoAuthorizedUser));
router.put('/profile/status', tryCatch(ProfileController.updateStatus));
router.get('profile/status/:id', tryCatch(ProfileController.getStatus));

router.post('/follow', [
  body('id', '436').notEmpty(),
], tryCatch(FollowController.follow));
router.put('/approve', [
  body('id', '436').notEmpty(),
], tryCatch(FollowController.approve));
router.put('/unfollow', [
  body('id', '436').notEmpty(),
], tryCatch(FollowController.unfollow));
router.get('/friends', tryCatch(FollowController.getFriends));
router.get('/subscribers', tryCatch(FollowController.getSubscribers));
router.get('/subscriptions', tryCatch(FollowController.getSubscriptions));

router.post('/dialog/message/:id', [
  param('id', '436').notEmpty(),
], tryCatch(DialogController.sendMessage));
router.get('/dialog/companion', tryCatch(DialogController.getAllDialogs));
router.delete('/dialog/message/:id', [
  param('id', '436').notEmpty(),
], tryCatch(DialogController.deleteMessage));
router.get('/dialog/messages/:id', [
  param('id', '436').notEmpty(),
], tryCatch(DialogController.getAllMessage));

export default router;
