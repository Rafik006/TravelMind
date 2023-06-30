const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config');
const sequelize = require("../config");



const Users = sequelize.define('users', {

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  imageUrl:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique:true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: false
});

const Posts = sequelize.define('posts', {
  
  postsId : {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  content :{
    type:DataTypes.TEXT,
    allowNull:false
  },
  likes:{
    type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:0
  },
  imageUrl:{
    type:DataTypes.STRING,
    allowNull:false,
  }
}, {
  tableName: 'posts',
  timestamps: true
});
sequelize.sync()
Posts.belongsTo(Users, {
  foreignKey: 'users_usersId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Users.hasMany(Posts, {
  foreignKey: 'users_usersId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});



module.exports={
  Posts,Users
}

