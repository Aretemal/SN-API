import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class Message extends Model {
  static associate(models) {
    this.belongsTo(models.Dialog, {
      foreignKey: 'dialogId',
      as: 'messages',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}
Message.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  senderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Message',
});
export default Message;
