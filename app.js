const { getPrice } = require("./coffeeService");
const type = "latte";
console.log(`Price for ${type} is ${getPrice(type)} UAH`);
