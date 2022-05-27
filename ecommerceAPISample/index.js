const express = require('express');
const connect = require('./config/db');
var bodyParser = require('body-parser');
const categoryRouter = require('./routes/categoryRoutes');
const app = express();
const http = require('http');
var cors = require('cors')
const server = http.createServer(app);
const port = 8080;
const { Server } = require("socket.io");
const io = new Server(server, {cors: {origin: "*"}});

app.use(cors())


connect.connectDb();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/categories', categoryRouter)



io.on('connection', (socket) => {
    console.log('User connected...');

    socket.on('chatMessage', (data) => {

       io.emit('serverMessage', data)

    })

})



server.listen(8080, function () {
    console.log(`Example app listening on port ${port}`)
})