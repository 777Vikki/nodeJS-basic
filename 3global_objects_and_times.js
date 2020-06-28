//1. Gives path+file name
console.log(__filename);

//2. Gives directory name
console.log(__dirname);

//3. Set time to run function
function printstuff3() {
    console.log("This was from setTimeout");
}

setTimeout(printstuff3, 5000);