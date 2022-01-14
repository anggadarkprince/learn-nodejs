function samplePromise() {
    return Promise.resolve("Angga")
}

const name = await samplePromise(); // error because no async signature
console.info(name)