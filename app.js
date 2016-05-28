"use strict";

var http = require("http");
http.createServer(function (req,res) {
    res.write("这是我的第一个网站");
    res.end();
}).listen(3001, function () {
    console.log(`3001 is listening`);

})