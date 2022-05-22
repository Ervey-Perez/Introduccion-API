const sql = require('mssql');

//set database connection credentials
const config = {
    user: "admin",
    password: "Qwerty3001",
    server: "localhost",
    database: "api",
  
  };

//Export the pool
module.exports = config;