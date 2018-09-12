var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);
    // write the response header that contains the status mssg and content-type
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Ryu', 
        job: 'Ninja',
        age: 29
    };
    res.end(JSON.stringify(myObj));
});

server.listen(8080, '0.0.0.0'); /*(port number, IP address)*/
console.log('yo dawgs, now listening to port 8080');