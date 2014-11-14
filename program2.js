var argv = process.argv,
    i,
    sum;

for(i = 2; i <= argv.length; i++){
    sum += Number(argv[i]);
}

console.log(sum);
