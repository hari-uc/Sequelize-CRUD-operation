// Creating Table Model
// Author : hariuc2001@gmail.com
// Date: 23-03-2022.

module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define("details", {
    pro_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pro_name: {
      type: DataTypes.STRING,
    },
    pro_description: {
      type: DataTypes.STRING,
    },
  });
  return table;
};