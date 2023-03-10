import express from 'express';
import cors from 'cors';
import { db } from './db.js';
import { errorHandler } from './src/middlewaree/errorHandler.js';
import Post from './src/models/post.js';
import router from './router.js';
import User from './src/models/user.js';
import Follow from './src/models/follow.js';

const app = express();
const PORT = process.env.DB_PORT;

app.use(cors()); // Use this after the variable declaration
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

async function startApp() {
  try {
    User.associate({ Post, Follow });
    Post.associate({ User });
    Follow.associate({ User });
    // await db.sync({ alter: true });
    app.listen(PORT, () => console.log(`Server created on port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}
startApp();
