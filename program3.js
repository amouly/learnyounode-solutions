/*globals console,process,require*/
var fs = require('fs'),
    file = process.argv[2],
    buffer,
    content,
    lines;

//Binary file data
buffer = fs.readFileSync(file);

//File content as String
content = buffer.toString();

//Split content into Array
lines = content.split('\n');

console.log(lines.length - 1);
