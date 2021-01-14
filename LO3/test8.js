// Splitting & Slicing Strings

var str = "hello, world";
console.log(str);

// using slice
var str2 = str.slice(2, 9);
console.log(str2);

var str3 = str.slice(2);
console.log(str3);

// using split
var tags = "meat, ham, salami, pork, beef, chicken";
console.log(tags);

var tagsArray = tags.split(",");
console.log(tagsArray);