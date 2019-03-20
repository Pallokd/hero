const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const router = require('./router.js')

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(router)
app.listen(5000, () => {
    console.log('正在监听端口5000,http://127.0.0.1:5000');
})