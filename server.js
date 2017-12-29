var http = require('http');
var uc = require('upper-case');

var port = process.env.PORT || '8080'

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end(uc('Hello World!'));
};
var www = http.createServer(handleRequest);
www.listen(port);