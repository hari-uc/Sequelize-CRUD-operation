//index for models
const dbconfig = require("../config/database");
const Sequelize = require("sequelize");
const DataTypes = require("sequelize");

//inizializing a new Sequelize object
const seq = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
  pool: {
    max: dbconfig.max,
    min: dbconfig.min,
    accquire: dbconfig.accquire,
    idle: dbconfig.idle,
  },
});

//authenticate
seq
  .authenticate()
  .then(() => {
    console.log("table created");
  })
  .catch((err) => {
    console.log(err);
  });

//inizilizing empty object
const db = {};
db.Sequelize = Sequelize;
db.sequelize = seq;

db.tabledetails = require("../models/details")(seq, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("sync done");
});

//Exporting db object.
module.exports = db;
