var express = require('express');
var router = express.Router();

/* Pagina de productos. */
router.get('/', function (req, res, next) {
    res.render('products', { title: 'Express' });
});

module.exports = router;
