const http = require('http');

const port = 3000;

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write("<h1>hello from home page</h1>");
        res.end();
    }else if(req.url === '/about'){
        res.writeHead(200,{'Content-type': 'text/html'});
        res.write("<h2>hello from about page</h2>");
        res.end();
    }
});

server.listen(port,()=>{
    console.log(`our new server is started at port ${port}`);
});
server.on('connection',()=>{
    setTimeout(()=>{
        console.log("emmiter is going on...");
    },3000)
})