const path = require('path');

module.exports = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/auth/login.ejs'), {
            title: 'LOGIN'
        });
    },
    doLogin: (req, res) => res.send('Route for  successful login view'),
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/auth/register.ejs'), {
            title:'REGISTRARSE'
        });
    },
    doRegister: (req, res) => res.send('Route for registered view'),
    logout: (req, res) => res.send('Route for sign off')
};