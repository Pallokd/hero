const conn = require('./db.js');
module.exports = {
    apiTest: (req, res) => {
        res.send('请求后台api接口成功')
    },
    getAllHero: (req, res) => {
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
    },
    addHero: (req, res) => {

        const hero = req.body;
        const date = new Date();
        const year = date.getFullYear();
        const mouth = ((date.getMonth() + 1).toString()).padStart(2, 0);
        const day = (date.getDate().toString()).padStart(2, 0);
        const hours = (date.getHours().toString()).padStart(2, 0);
        const mintutes = (date.getMinutes()).toString().padStart(2, 0);
        const seconds = (date.getSeconds().toString()).padStart(2, 0);
        hero.ctime = year + '-' + mouth + '-' + day + ' ' + hours + ':' + mintutes + ':' + seconds;
        console.log(hero)
        const sqlstr = 'insert into heros set ?';
        conn.query(sqlstr, hero, (err, data) => {
            if (err) {
                res.send({
                    status: 500,
                    error: err.message
                })
            }
            res.send({
                status: 200,
                msg: 'done'
            })
        })
    },
    getHero: (req, res) => {
        const id = req.params.id;
        const sqlstr = 'select * from heros where id=?';

        conn.query(sqlstr, id, (err, data) => {
            if (err) {
                res.send({
                    status: 500,
                    msg: err.message
                })
            }
            res.send({
                status: 200,
                data
            })
        })
    },
    upDate: (req, res) => {
        const hero = req.body;
        const id = hero.id;
        const sqlstr = 'update heros set ? where id=?';
        conn.query(sqlstr, [hero, id], (err, data) => {
            if (err) {
                res.send({
                    status: 500,
                    msg: err.message
                })

            }
            res.send({
                status: 200,
                msg: 'done',

            })
        })
    },
    delHero: (req, res) => {
        const id = req.params.id;
        const sqlstr = 'update heros set isdel=1 where id=?';

        conn.query(sqlstr, id, (err, data) => {
            if (err) {
                res.send({
                    status: 500,
                    msg: err.message
                })
            }

            res.send({
                status: 200,
                data: data
            })
        })
    }
}