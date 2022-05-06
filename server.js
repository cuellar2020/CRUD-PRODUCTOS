require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const usuarioController = require('./controllers/usuarioCotroller');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('html', exphbs({ extname: 'html', defaultLayout: 'index', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'html');

app.listen(3000, () => {
    console.log('Server : 3000');
});

app.use('/producto', usuarioController);