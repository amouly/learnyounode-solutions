/*globals console,process,require*/
var fs = require('fs'),
    ph = require('path'),
    path = process.argv[2],
    ext = "." + process.argv[3];

//Read directory
fs.readdir(path, function done(error, list) {
    'use strict';

    var i;

    //For ech File
    for (i = 0; i < list.length; i += 1) {

        //If current file has extension
        if (ph.extname(list[i]) === ext) {
            console.log(list[i]);
        }
    }
});
