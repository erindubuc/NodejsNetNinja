var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact') {
       res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res); 
    } else if (req.url === '/api/ninjas') {
        var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else{
      res.writeHead(200, {'Content-Type' : 'text/html'});
      fs.createReadStream(__dirname + '/404.html').pipe(res);  
    }
});
server.listen(8080, '0.0.0.0');
// server.listen(3000, '0.0.0.0'); /*(port number, IP address)*/
console.log('yo dawgs, now listening to port 8080');