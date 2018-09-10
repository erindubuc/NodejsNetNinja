var fs = require('fs');

// need a file to read
fs.readFile('readme.txt', 'utf8', function(err, data){
   fs.writeFile('writeMe.txt', data);
});


