const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: 'This field is required.'
    },
    precio: {
        type: String
    },
    stock: {
        type: String
    },
    descripcion: {
        type: String
    },
    categoria: {
        type: String
    }
});




mongoose.model('productos', employeeSchema);