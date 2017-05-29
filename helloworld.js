console.log("hello, world!");
var http = require("http");
http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type':'Text/plain'});
	response.end('Hello World, my name is Xianmei Lei');
}).listen(8001);
console.log('Server running at http://127.0.0.1:8001/');