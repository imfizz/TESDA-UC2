// Strings

var myString = 'I\'m a fun string';
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf("string"));

// try it on if else statement
if (myString.indexOf("ninja") === -1){
    console.log("the word ninja is not in the string");
} else {
    console.log("the word ninja starts at position " + myString.indexOf("ninja"));
}


// create new variable
var string1 = "abc";
var string2 = "ABC";

console.log(string1.toLowerCase() === string2.toLowerCase());

