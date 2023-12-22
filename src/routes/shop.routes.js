const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Esta es la vista del SHOP'));
router.get('/item-id', (req, res) => res.send('Esta es la vista del SHOP'));