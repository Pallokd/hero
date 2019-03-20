const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('1');
})

app.listen(3000, () => {
    console.log('正在监听端口3000,http://127.0.0.1:3000');
})