const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

//Routes-Imports
const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const adminRoutes = require('./src/routes/admin.routes');
const authRoutes = require('./src/routes/auth.routes');


const PORT = 4000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));


app.use(express.static('public'));


app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);






app.listen(PORT, () => console.log(`servidor corriendo en ⚡ http://localhost:${PORT}`));
