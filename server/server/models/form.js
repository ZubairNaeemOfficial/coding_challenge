const db = require("./db");
const { DataTypes } = require("sequelize");
const formData = db.define(
  "Form",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: true,
        msg: 'Please enter your name'
      }
    },
    selectdata: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address'
      },
    },
    terms: {
      type: DataTypes.BOOLEAN,
      allowNull: {
        args: false,
        msg: 'Do not leave it empty'
      },
    },
  },
  {
    tableName: "Forms",
  }
);
module.exports = formData;