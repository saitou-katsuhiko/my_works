const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
    fs.readFile('./index.html', 'utf-8', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});
server.listen(3000);
console.log('サーバを起動しました');