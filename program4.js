/*globals console,process,require*/
var fs = require('fs'),
    file = process.argv[2];

//Read Binary file data
fs.readFile(file, function done(error, buffer) {
    'use strict';

    var content,
        lines;

    if (error) {
        //File content as String
        content = buffer.toString();

        //Split content into Array
        lines = content.split('\n');

        //Print lines count
        console.log(lines.length - 1);
    } else {
        console.log(error);
    }

});
