require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const port = process.env.PORT || 8080;
const usuarioController = require('./controllers/usuarioCotroller');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('html', exphbs({ extname: 'html', defaultLayout: 'index', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'html');

app.listen(port, function () {
    console.log(`Example app listening on ${port}!`);
  });

app.use('/producto', usuarioController);