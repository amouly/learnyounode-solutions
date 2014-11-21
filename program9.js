/*globals console,process,require*/
var BufferList = require('bl'),
    http = require('http'),
    urls = [process.argv[2], process.argv[3], process.argv[4]],
    buffer = new BufferList();

urls.forEach(function (url, index) {
    'use strict';

    http.get(url, function done(response) {

        buffer.append(response);
    });
});

console.log(buffer.toString());
