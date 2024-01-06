const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Route for admin view'));
router.get('/create', (req, res) => res.send('Route for  create view'));
router.post('/create', (req, res) => res.send('Route for create update view'));
router.get('/edit/:id', (req, res) => res.send('Route for edit view'));
router.put('/edit/:id', (req, res) => res.send('Route for send data'));
router.delete('/delete/:id', (req, res) => res.send('Route for delete id'));

module.exports = router;