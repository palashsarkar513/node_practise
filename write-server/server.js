        // local module

// const student = require('./students');
// student.getName("Dhaka")

// ----------***------***----------***-----***-----***

        //making fs (fileSystem) module
// writeFile(), appendFile(), readFile(), unlink(), rename(), exists()

const write = require('fs');
// write.writeFile("new.txt", "hello this is new data for new file",(err,data)=>{
//     if(err){console.log(err)}
//     else console.log("successfull");
// });

// write.appendFile("new.txt", "thes data is added for new one.",(err,data)=>{
//     if(err){console.log(err)}
//     else {console.log("successfull")};
// });

// write.readFile("new.txt",'utf-8',(err,data)=>{
//     if(err){console.log(err)}
//     else{console.log(data)}
// });

// write.unlink("new2.txt",(err,data)=>{   new2.txt ai file ta delete lorte hole same directory te ai name ai akta file create kore nete hobe
//     if(err){console.log(err)}
//     else{console.log("successfull")};
// });


        //making own server

const http = require('http');
const port = 3000;
const myServer = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write("<h1>this is my first server</h1>");
    res.write("<h3>hello world</h3>");
    res.end();
});
myServer.listen(port,()=>console.log(`my first server is running at the port ${port}`));