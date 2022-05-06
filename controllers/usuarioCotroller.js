const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('productos');

router.get('/', (req, res) => {
    res.render("producto/addOrEdit", {
        viewTitle: "Agregar producto"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    var employee = new Employee();
    employee.nombre = req.body.nombre;
    employee.precio = req.body.precio;
    employee.descripcion = req.body.descripcion;
    employee.stock = req.body.stock;
    employee.categoria = req.body.categoria;
    employee.save((err, doc) => {
        if (!err)
            res.redirect('producto/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("producto/addOrEdit", {
                    viewTitle: "Agregar producto",
                    employee: req.body
                });
            }
            else
                console.log('Error  : ' + err);
        }
    });
}

function updateRecord(req, res) {
    Employee.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('producto/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("producto/addOrEdit", {
                    viewTitle: 'Actualizar producto',
                    employee: req.body
                });
            }
            else
                console.log('Error  : ' + err);
        }
    });
}


router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render("producto/list", {
                list: docs
            });
        }
        else {
            console.log('Error  :' + err);
        }
    });
});


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'nombre':
                body['nombreError'] = err.errors[field].message;
                break;
            case 'precio':
                body['rrecioError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("producto/addOrEdit", {
                viewTitle: "Actualizar producto",
                employee: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/producto/list');
        }
        else { console.log('Error :' + err); }
    });
});

module.exports = router;