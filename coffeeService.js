const prices = { espresso: 30, latte: 50, cappuccino: 45 };
const getPrice = (type) => prices[type] || 0;
module.exports = { getPrice };
