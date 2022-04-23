import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync("zlib-compress.mjs");
console.info(source.toString());

const result = zlib.gzipSync(source);
console.info(result.toString());

fs.writeFileSync("zlib-compress.mjs.txt", result);