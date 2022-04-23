import fs from "fs"

const writer = fs.createWriteStream("target.log");
writer.write("Angga\n");
writer.write("Ari\n");
writer.write("Wijaya\n");
writer.end();

const read = fs.createReadStream("target.log");
read.addListener('data', (data) => {
    console.info(data.toString());
});