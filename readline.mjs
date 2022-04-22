import process from 'process';
import readline from 'readline';

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("What's your name?", (name) => {
    console.info(name);
    input.close();
});
