/*globals console,process*/
var argv = process.argv,
    i,
    sum = 0;

for (i = 2; i < argv.length; i += 1) {
    sum = sum + Number(argv[i]);
}

console.log(sum);
