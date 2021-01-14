// if statement and control flow
var youLikeMeat = true;

if(youLikeMeat){
    document.write("Here is the meaty menu...");
} // it will print because the condition is true

if(7 > 5){
    document.write("This expression is true");
} // it will print because the condition is true

if(7 < 5){
    document.write("This expression is false");
} // it doesn't print out

var myNum = 10;
if(myNum > 10){
    document.write("myNum is greater than 10");   
} // it doesn't print out

if(myNum == 10){
    document.write("myNum is equal to 10");   
} // it will print

myNum = 8;
if(myNum == 10){
    document.write("myNum is equal to 10");   
} // it doesn't print out because the condition is false
  else {
    document.write("myNum is not equal to 10");
} // the else condition will run


// use the youLikeMeat variable to test in if else condition
youLikeMeat = false;
if(youLikeMeat){
    document.write("you like meat");   
} else {
    document.write("you hate meat");
} // the result is you hate meat because the youLikeMeat is false.

