const prices = { espresso: 999, latte: 50, cappuccino: 45 };
const getPrice = (type) => {
  const price = prices[type.toLowerCase()];
  return price ? `${price} UAH` : "Not available";
};
module.exports = { getPrice };
