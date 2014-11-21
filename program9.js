/*globals console,process,require*/
var bl = require('bl'),
    http = require('http'),
    urls = [process.argv[2], process.argv[3], process.argv[4]],
    buffer = bl();

urls.forEach(function (url, index) {
    'use strict';

    http.get(url, function done(response) {


        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }

            buffer.append(response);
        }));
    });


});

console.log(buffer.toString());
