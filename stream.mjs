import fs from "fs"

const writer = fs.createWriteStream("target.log");
writer.write("Angga\n");
writer.write("Ari\n");
writer.write("Wijaya\n");
writer.end();

const read = fs.createReadStream("target.log"); // pause mode
read.addListener('data', (data) => { // flowing mode
    console.info(data);
    console.info(data.toString());
});

// specify encoding utf-8 then listener will return string immediately
const read2 = fs.createReadStream("target.log", {encoding: 'utf-8'});
read2.addListener('data', (data) => {
    console.info(data);
});

// comment read.addListener() above
setTimeout(() => {
    read.on('data', (chunk) => {
        console.log(chunk);
    })
}, 2000);