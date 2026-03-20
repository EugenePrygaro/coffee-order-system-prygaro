const { getPrice } = require("./coffeeService");
const { isValidType } = require("./validator");
const type = "Mocha";

console.log("Order started"); // додане логування
if (isValidType(type)) {
  console.log(`Price: ${getPrice(type)}`);
} else {
  console.log("Error: We don't have this coffee.");
}
console.log("MAIN finish");
