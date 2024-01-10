const path = require('path');

module.exports = {
        shop: (req, res) => {
            res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
                title:'TIENDA'
            });
           
        },
        item: (req, res) => {
            res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
                title:'ITEM'
            });  
        },
        addItem: (req, res) => res.send('Route for add the current item to the shop cart'),
        cart: (req, res) => {
            res.render(path.resolve(__dirname, '../views/shop/cart.ejs'), {
                title: 'CART'
            });   
        },
        addtoCart:(req, res) => res.send('Route for got to checkout page')
};