// Logical Operators
var age = 25;

// condition using AND &&
// it turns to true but if you change the age to 35 it will turn out false.
if(age >= 18 && myAge <= 30){
    document.write("You can come, you cool dude");
} else {
    document.write("you aint coming!");
}


// next condition using OR ||
myAge = 35;
if(age < 18 || myAge > 30){
    document.write("you aint coming!");
} else {
    document.write("You can come, you cool dude");
}

myAge = 25;
if(age < 18 || myAge > 30 || myAge === 25){
    document.write("you aint coming!");
} else {
    document.write("You can come, you cool dude");
}