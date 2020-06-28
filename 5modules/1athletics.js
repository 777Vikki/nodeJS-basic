function relay() {
  console.log("This is relay1 function");
}

function longjump() {
  console.log("This is longjump1 function");
}

module.exports.relay = relay;
//We did only exports only relay1. So we can only access relay1
// In module.exports, we can either use relay1 or use any name.

