const { DataTypes } = require('sequelize');

module.exports = (database) => {
   database.define('User', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true,
         unique: true,
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      active: {
         type: DataTypes.BOOLEAN,
         defaultValue: false,
      },
   }, { timestamps: false });
};
