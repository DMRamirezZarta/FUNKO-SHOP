const express = require('express');
const router = express.Router();
const {shop, item, addItem, cart, addtoCart} = require('../controllers/shop.controller');

router.get('/', shop);
router.get('/item/:id',  item);
router.post('/item/:id/add', addItem);
router.get('/cart', cart);
router.post('/cart', addtoCart);

module.exports = router;