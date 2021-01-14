// Constructor Functions

var myArray = new Array();

var Car = (maxSpeed, driver) => {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = (speed, time) => {
        console.log(speed * time);
    };
    this.logDriver = () => {
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(40, "Humpty Dumpty");
var myCar3 = new Car(10, "Shaun");
var myCar4 = new Car(90, "James Bond");

myCar.drive(30, 5);
myCar3.logDriver();