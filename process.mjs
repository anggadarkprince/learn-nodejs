import process from "process";

process.addListener('exit', function(exitCode) {
    console.info('node is exit with code ' + exitCode)
});

console.log(process.version)
console.table(process.argv)
console.table(process.report)
console.table(process.env)