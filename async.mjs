function samplePromise() {
    return Promise.resolve("Angga")
}

const name = await samplePromise(); // not error, because by default .mjs is async in top level of the file
console.info(name)