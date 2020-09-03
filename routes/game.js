var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('game/index', { title: 'AirConsole - Ai là triệu phú'});
});

module.exports = router;
