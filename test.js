const assert = require("assert");
const { getPrice } = require("./coffeeService");

try {
  console.log("Запуск тесту: Перевірка ціни Espresso...");
  const price = getPrice("espresso");

  assert.strictEqual(price, "30 UAH", "Ціна за espresso має бути 30 UAH");

  console.log("✅ Тест пройдено успішно!");
} catch (err) {
  console.error("❌ Тест провалено:");
  console.error(err.message);
  process.exit(1);
}
