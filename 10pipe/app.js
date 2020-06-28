const fs = require('fs');
const readableStream = fs.createReadStream('in.txt');
const writeableStream = fs.createWriteStream('out.txt');
readableStream.pipe(writeableStream);