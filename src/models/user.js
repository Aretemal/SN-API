import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class User extends Model {
  static associate(models) {
    this.hasMany(models.Post, {
      foreignKey: 'authorId',
      as: 'author',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.hasMany(models.Follow, {
      foreignKey: 'followerId',
      as: 'follower',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.hasMany(models.Follow, {
      foreignKey: 'followingId',
      as: 'following',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.hasMany(models.Comment, {
      foreignKey: 'senderCommentId',
      as: 'senderComment',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.hasMany(models.LikePost, {
      foreignKey: 'senderLikeId',
      as: 'senderLike',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}
User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
  login: DataTypes.STRING,
  status: {
    type: DataTypes.STRING,
    defaultValue: 0,
  },
  lang: {
    type: DataTypes.STRING,
    defaultValue: 'en',
  },
  ava: {
    type: DataTypes.BLOB,
    defaultValue: 0,
  },
}, {
  sequelize: db,
  modelName: 'User',
});

export default User;
