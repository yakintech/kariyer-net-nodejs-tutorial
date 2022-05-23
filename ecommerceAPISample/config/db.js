const mongoose = require("mongoose");
const env = require('./environments');

const connectDb = () => {
    try {
        mongoose.connect(env.connection.db, () => {
            console.log('Mongoose connected...');
        })

    } catch (error) {
        
        console.log('Db error...', error);
    }
}

module.exports = {
    connectDb
}