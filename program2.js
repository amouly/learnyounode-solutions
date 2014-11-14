/*globals console,process*/
var argv = process.argv,
    i,
    sum;

for (i = 2; i <= argv.length; i += 1) {
    sum += argv[i];
}

console.log(sum);
