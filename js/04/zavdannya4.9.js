let userInput = prompt("Введіть рядок (використовуйте \\n як маркер нового рядка):");
let modifiedString = userInput.split("\\n").join("\n");
alert(modifiedString);
