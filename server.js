import { db } from './db.js';
import Follow from './src/models/follow.js';
import Dialog from './src/models/dialog.js';
import Message from './src/models/message.js';
import Post from './src/models/post.js';
import User from './src/models/user.js';
import app from './app.js';

const PORT = process.env.DB_PORT;
async function startApp() {
  try {
    User.associate({ Post, Follow, Dialog });
    Post.associate({ User });
    Dialog.associate({ User, Message });
    Message.associate({ Dialog });
    Follow.associate({ User });
    // await db.sync({ alter: true });
    app.listen(PORT, () => console.log(`Server created on port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}
startApp();
