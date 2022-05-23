const express = require('express');
const connect = require('./config/db');
var bodyParser = require('body-parser')
const { body, validationResult } = require('express-validator');


const { categoryController } = require('./controllers/categoryController');
const { categoryValidations } = require('./validation/category');
const app = express();
const port = 8080;



connect.connectDb();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/api/categories', categoryController.getAll);
app.get('/api/categories/:id', categoryController.getById);
app.post('/api/categories', categoryValidations.addCategory, categoryController.add);
app.put('/api/categories', categoryValidations.updateCategory, categoryController.update);
app.delete('/api/categories/:id', categoryController.delete);



app.listen(8080, function () {
    console.log(`Example app listening on port ${port}`)
})