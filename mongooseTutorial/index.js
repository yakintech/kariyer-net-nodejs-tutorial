
const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    title: String,
    description: String
});

const Product = mongoose.model('Product', productSchema);

var product = new Product({
    title: 'Huawei',
    number : 4
});

product.save();

mongoose.connect("mongodb+srv://cagatay:nxpMvXNUuYA5evrY@cluster0.yk1lz.mongodb.net/techcareerdb?retryWrites=true&w=majority");

