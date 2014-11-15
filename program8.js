/*globals console,process,require*/
var bl = require('bl'),
    http = require('http'),
    url = process.argv[2];

http.get(url, function done(response) {
    'use strict';
    
    response.on("data", function (data) {
        console.log(data.toString());
    });
    
    response.pipe(bl(function (err, data) {
        
    }));
});