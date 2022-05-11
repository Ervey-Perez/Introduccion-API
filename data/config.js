const mysql = require('mysql');

//set database connection credentials
const config = {
    host:'localhost',
    user: 'root',
    password: 'Qwerty3001',
    database: 'api',
};

//create a MySql pool
const pool = mysql.createPool(config);

//Export the pool
module.exports = pool;