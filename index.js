//Bu http modülü sayesinde bir web server oluşturacağız.

var http = require('http')

http.createServer(function(req, res){

    console.log("User Request", req.url);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Çağatay Yışdız');


}).listen(8080)






