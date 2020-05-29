'use strict';

var http = require('http'); //what is require???
http.createServer(function (req, res) { //http server, what is req? What is res?
    res.writeHead(200, { //why does res.writehead request
        "Content-Type": "text/plain"
    });
    res.end('Hello World');
}).listen(3000);
console.log("Server listening on port 3000") //ctrl + f5 to run is faster
//editted on github
