function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}
const celsiusInput = parseFloat(prompt("Введіть температуру в градусах Цельсія:"));
const fahrenheitOutput = celsiusToFahrenheit(celsiusInput);
alert("Температура в градусах Фаренгейта: " + fahrenheitOutput);
const fahrenheitInput = parseFloat(prompt("Введіть температуру в градусах Фаренгейта:"));
const celsiusOutput = fahrenheitToCelsius(fahrenheitInput);
alert("Температура в градусах Цельсія: " + celsiusOutput);
