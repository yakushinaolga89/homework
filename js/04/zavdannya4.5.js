let firstName = prompt("Введіть ваше ім'я:");
let lastName = prompt("Введіть ваше по батькові:");
let middleName = prompt("Введіть ваше прізвище:");
firstName = firstName.trim();
lastName = lastName.trim();
middleName = middleName.trim();
firstName = capitalize(firstName);
lastName = capitalize(lastName);
middleName = capitalize(middleName);
let fullName = firstName + " " + lastName + " " + middleName;
alert("ПІБ: " + fullName);