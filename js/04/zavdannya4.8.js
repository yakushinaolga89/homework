let str = "якийсь текст у якому є один тег <br /> і всяке інше";
let tagStart = str.indexOf("<");
let tagEnd = str.indexOf(">");
let tag = str.slice(tagStart, tagEnd + 1);
let result = str.slice(0, tagStart) + tag.toUpperCase() + str.slice(tagEnd + 1);
console.log(result); //якийсь текст у якому є один тег <BR /> і всяке інше
