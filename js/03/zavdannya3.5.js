const rate = 40;
const amount = prompt("Введіть суму валюти:");
const exchangedAmount = parseFloat(amount) * rate;
const roundedAmount = exchangedAmount.toFixed(2);
alert("Результат обміну: " + roundedAmount);