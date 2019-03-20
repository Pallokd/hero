const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123shzzz',
    database: 'mysql_001'
})

module.exports = conn;