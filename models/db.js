
const mongoose = require('mongoose');
const password = 'Gutyyponcho1';
const dbname = 'almacen';
const uri =  `mongodb+srv://user01:${password}@cluster0.lw4d7.mongodb.net/${dbname}?retryWrites=true&w=majority`;


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e));

require('./employee.model');