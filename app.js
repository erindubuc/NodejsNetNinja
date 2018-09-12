var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);
    // write the response header that contains the status mssg and content-type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1'); /*(port number, IP address)*/
console.log('yo dawgs, now listening to port 3000');