const express = require('express');
const app = express();
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql_001'
})

app.get('/', (req, res) => {
    res.send('请求后台api接口成功')
})

app.get('/getallhero', (req, res) => {
    const sqlstr = 'select * from heros'
    conn.query(sqlstr, (err, data) => {
        if (err) {
            return res.send({
                status: 500,
                msg: err.message
            })
        }
        res.send({
            status: 200,
            data: data
        })

    })
})
app.get('/addhero', (req, res) => {
    const sqlstr = ''
})
app.listen(5000, () => {
    console.log('正在监听端口5000,http://127.0.0.1:5000');
})