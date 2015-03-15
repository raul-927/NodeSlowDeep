/**
 * New node file
 */
var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('NodeSlowDeep esta activo\n');
}).listen(2000, "127.0.0.1");
console.log('NodeSlowDeep esta activo');
