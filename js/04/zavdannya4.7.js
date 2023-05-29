let str = "якийсь текст, в якому є один тег <br /> і всяке інше";

let startTag = "<";
let endTag = ">";
let startIndex = str.indexOf(startTag);
let endIndex = str.indexOf(endTag, startIndex);

let result = str.slice(0, startIndex) + str.slice(endIndex + 1);

console.log(result); //якийсь текст, в якому є один тег  і всяке інше
