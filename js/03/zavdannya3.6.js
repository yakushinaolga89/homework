const red = 255;
const green = 0;
const blue = 128;
const redHex = decToHex(red); // Перетворення на шістнадцяткову систему
const greenHex = decToHex(green);
const blueHex = decToHex(blue);
const cssColor = `#${redHex}${greenHex}${blueHex}`; //Формування CSS-кольору
console.log(cssColor); // Виведе "#ff0080"

function decToHex(number) {
    return number.toString(16).padStart(2, '0');
}