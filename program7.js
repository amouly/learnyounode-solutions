/*globals console,process,require*/
var http = require('http'),
    url = process.argv[2];

http.get(url, function done(response) {
    'use strict';
    
    response.on("data", function (data) {
        console.log(data.toString());
    });
});