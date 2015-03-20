/**
 * New node file
 */
var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('NodeSlowDeep esta activo\n');
	console.log('NodeSlowDeep esta activo');
}).listen(80, "localhost:2000/webfarm");
//console.log('NodeSlowDeep esta activo');
