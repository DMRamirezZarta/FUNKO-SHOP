const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => res.send('Route for login view'));
router.post('/login', (req, res) => res.send('Route for  successful login view'));
router.get('/register', (req, res) => res.send('Route for register view'));
router.post('/register', (req, res) => res.send('Route for registered view'));
router.get('/logout', (req, res) => res.send('Route for sign off'));

module.exports = router;