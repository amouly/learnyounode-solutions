/*globals console,process,require*/
var module = require('./modules/module6.js'),
    path = process.argv[2],
    ext = process.argv[3];

module(path, ext, function (error, result) {
    'use strict';
    
    var i;
    
    if (!error) {
        
        for (i = 0; i < result.length; i += 1) {
            console.log(result[i]);
        }
        
    }
});