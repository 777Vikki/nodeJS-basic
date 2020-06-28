// 1

console.log("User 1 made a request");
setTimeout(callback, 5000);

console.log("User 2 made a request");
setTimeout(callback, 5000);

console.log("User 3 made a request");
setTimeout(callback, 5000);

function callback() {
  console.log("Queried the database and delivered data in 5 seconds");
}

// 2

function add(a, b, callback) {
  console.log(`The sum of ${a} and ${b} is ${a + b}.` + "<br>");
  callback();
}

function disp() {
  console.log("This must be printed after addition");
}

add(5, 6, disp);
