const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

/* GET home page. */
router.get('/', ProductController.home);
router.get('/detalle', ProductController.detail);

module.exports = router;
