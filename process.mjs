import process from 'process'

process.addListener('exit', function(exitCode) {
    console.info(`Application will be shut down with code ${exitCode}`)
})

console.table(process.argv)
console.table(process.version)
console.table(process.report)
console.info(process.env)

process.exit(1)

console.info('Not executed')
