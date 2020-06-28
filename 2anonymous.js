//1. Simple a function and pass the argunment

function printstuff1(stuff1) {
  console.log(stuff1);
}

printstuff1("Hello Stuff1");

//2. Parameter pass as an argunment

function printstuff2(stuff2) {
  console.log(stuff2);
}

function mainfunction2(anotherfunction2, value2) {
  anotherfunction2(value2);
}

mainfunction2(printstuff2, "Stuff2");

// 3. Assign Function to a variable

const printstuff3 = function (stuff3) {
  console.log(stuff3);
};

function mainfunction3(anotherfunction3, value) {
  anotherfunction3(value);
}

mainfunction3(printstuff3, "Stuff3");

// 4. Anonymous function
function mainfunction4(anotherfunction4, value) {
  anotherfunction4(value);
}

mainfunction4(function (stuff4) {
  console.log(stuff4);
}, "Stuff4");  //Here functin(stuff4) {} is a anonymous function.


