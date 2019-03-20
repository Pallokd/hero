const express = require('express');
const router = express.Router();

const ctrl = require('./controller.js')

router.get('/', ctrl.apiTest)

router.get('/getallhero', ctrl.getAllHero)
// router.post('/addhero', ctrl.addHero)
// router.get('/gethero/:id', ctrl.getHero)
// router.post('/update', ctrl.upDate)
// router.get('/delhero/:id', ctrl.delHero)
module.exports = router