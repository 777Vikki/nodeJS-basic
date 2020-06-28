const fs = require("fs");
const readableStream = fs.createReadStream("input.txt");
let data = "";
readableStream.setEncoding("utf-8");
readableStream.on("data", (chunk) => {
  data += chunk;
}); //It is also eventEmitter.
readableStream.on("end", () => {
  console.log(data);
});
const writeData = "Hello Vivek";
const writeableStream = fs.createWriteStream("output.txt");
writeableStream.write(writeData, "utf-8");
writeableStream.end();
writeableStream.on("finish", () => {
  console.log("Write completed");
});
