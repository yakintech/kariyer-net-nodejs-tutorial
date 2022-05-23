const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: String,
    cNumber: Number
})


const Category = mongoose.model('Category', categorySchema);

module.exports = {
    Category
}



