//database configuration
//author: hariuc2001@gmail.com
//date : 23-03-2022

module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "admin",
  DB: "inventory",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    accquire: 30000,
    idle: 10000,
  },
  
};


