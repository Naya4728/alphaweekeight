let text = "   Hello, World! This is a TEST string. It has 123 numbers and some extra spaces.   ";
//Trim the text
let trimmedText = text.trim();
console.log(trimmedText);

//Lowercase
let lowerCaseText = trimmedText.toLowerCase();
console.log(lowerCaseText);

//replace
let replacedtext = lowerCaseText.replace("test", "practice");
console.log( replacedtext);

//count the letter 's'
let count = text.match(/s/g).length;
console.log('count of s:', count);

//strings ends with
let endsWithperiod = text.trim().endsWith(".");
console.log(endsWithperiod);

//index of
let indexOfWorld = text.trim().indexOf("World");
console.log(indexOfWorld);

//split
let testarray = text.trim().split(" ");
console.log(testarray);

//remve all numbers
let removeNumbers = text.replace(/\d+/g, "");
console.log(removeNumbers);

//capitalize
let capitalizedtext = trimmedText.toUpperCase();
capitalizedtext = capitalizedtext.charAt(0).toUpperCase() + capitalizedtext.slice(1);
console.log(capitalizedtext);

//string contains
let containshello = text.trim().includes("hello");
console.log(containshello);