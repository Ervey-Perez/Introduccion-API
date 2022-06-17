const mysql = require('mysql2');

//set database connection credentials
const config = {
    host:'localhost',
    user: 'l18540327',
    password: 'VK5857ywdPd3szv',
    database: 'apiervey',
};

//create a MySql pool
const pool = mysql.createPool(config);

//Export the pool
module.exports = pool;