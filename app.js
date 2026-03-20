const { getPrice } = require("./coffeeService");
const { isValidType } = require("./validator");
const type = "Mocha";
if (isValidType(type)) {
  console.log(`Price: ${getPrice(type)}`);
} else {
  console.log("Error: We don't have this coffee.");
}
