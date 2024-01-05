const express = require('express');
const router = express.Router();

router.get('./home', (req, res) => res.send('esta es la vista del HOME'));
router.get('./contact', (req, res) => res.send('esta es la vista de CONTACTO')); 
router.get('./about', (req, res) => res.send('esta es la vista SOBRE NOSOTROS'));
router.get('./faqs', (req, res) => res.send('esta es la vista de PREGUNTAS FRECUENTES'));



module.exports = router;