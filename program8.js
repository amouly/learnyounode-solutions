/*globals console,process,require*/
var bl = require('bl'),
    http = require('http'),
    url = process.argv[2];

http.get(url, function done(response) {
    'use strict';

    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }

        console.log(data.length);
        console.log(data.toString());
    }));
});
