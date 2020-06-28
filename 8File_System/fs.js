const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Async data is " + data.toString());
    }
});

const data = fs.readFileSync('input.txt');
console.log("Sync data is " + data.toString());
console.log('This is the end');