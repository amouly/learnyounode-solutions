/*globals console,process,require*/
var bl = require('bl'),
    http = require('http'),
    urls = [process.argv[2], process.argv[3], process.argv[4]],
    finalData;

urls.forEach(function (url, index) {
    'use strict';

    http.get(url, function done(response) {
        response.on("data", function (data) {
            finalData += data;
        });
    });
});

console.log(finalData);
