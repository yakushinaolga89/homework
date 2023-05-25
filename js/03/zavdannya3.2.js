let age = prompt("Введіть ваш вік:");
let realYear = new Date().getFullYear();
let birthYear = realYear - age;
alert("Ваш рік народження: " + birthYear);