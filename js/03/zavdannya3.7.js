var floors = parseInt(prompt("Введіть кількість поверхів у будинку:"));
var numberOfApartmentsPerFloor = parseInt(prompt("Введіть кількість квартир на поверсі:"));
var apartmentNumber = parseInt(prompt("Введіть номер квартири:"));
var entrance = Math.ceil(apartmentNumber / (floors * numberOfApartmentsPerFloor)); //обчислення номеру під'їзду на основі вхідних даних 
var floor = Math.ceil((apartmentNumber % (floors * numberOfApartmentsPerFloor)) / numberOfApartmentsPerFloor);// Обчислення номеру поверху
console.log("Квартира з номером " + apartmentNumber + " знаходиться на " + floor + "-му поверсі " + entrance + "-го під'їзду.");
