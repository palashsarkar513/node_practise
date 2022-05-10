const http = require('http');

const getFruitsName = require('random-fruits-name');
const name = getFruitsName('en');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(`<h1> ${name} </h1>`);
    res.end();
});
server.listen(3000);
