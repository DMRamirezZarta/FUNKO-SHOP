const path = require('path');

module.exports = {
    admin: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
            title: 'Administrador'
        });
    },
    createView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
            title:'CREAR|ITEM'
        });
    },
    createItem: (req, res) => res.send('Route for create update view'),
    editView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: 'EDITAR'
        });
    },
    editItem: (req, res) => res.send('Route for send data'),
    deleteItem: (req, res) => res.send('Route for delete id')
};