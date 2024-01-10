const path = require('path');

const mainControllers = {
    home:(req, res) => {
        res.render('index', {
            title: 'HOME'
        });
    },
    contact:(req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/contact.ejs'), {
            title: 'CONTACTO'
        });
    },
    about:(req, res) => res.send('esta es la vista SOBRE NOSOTROS'),
    faqs:(req, res) => res.send('esta es la vista de PREGUNTAS FRECUENTES')
}

module.exports = mainControllers;