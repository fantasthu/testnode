"use strict";

var http = require("http");
http.createServer(function (req,res) {
    console.log(req.pathname);
}).listen(3001, function () {
    console.log(`3001 is listening`);

})