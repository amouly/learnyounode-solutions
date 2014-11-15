/*globals console,process,require,module*/
var fs = require('fs'),
    ph = require('path');

module.exports = function (path, ext, callback) {
    'use strict';

    //Read directory
    fs.readdir(path, function done(error, list) {
        var i,
            final = [];

        if (error) {
            return callback(error);
        }
        
        //For each File
        for (i = 0; i < list.length; i += 1) {
            //If current file has extension
            if (ph.extname(list[i]) === "." + ext) {
                final.push(list[i]);
            }
        }

        callback(null, final);
    });
};