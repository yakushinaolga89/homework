let sentence = "Один талановитий пивовар зварив новий сорт пива";
let target = "пива";
let replacement = "чаю";
let wordArray = sentence.split(" ");

for (let i = 0; i < wordArray.length; i++) {
  if (wordArray[i] === target) {
    wordArray[i] = replacement;
  }
}

let updatedSentence = wordArray.join(" ");
alert(updatedSentence); //"Один талановитий пивовар зварив новий сорт чаю"

