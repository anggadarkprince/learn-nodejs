import process from 'process'
import readline from 'readline'

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

input.question("What yout name? ", (name) => {
    console.info(`Hello ${name}`)
    input.close()
})