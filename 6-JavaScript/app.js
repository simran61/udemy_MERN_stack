// ECMAScript --> European Computer Manufacturer Association
// JavaScript is an INTERPRETED PROGRAMMING LANGUAGE like python and ruby
// c/c++ java & swift are COMPILED PROGRAMMING LANGUAGES
// js is used to buil websites and web apps

alert('hello');
alert('world');
window.alert('hello');  //all 3 statements are same

// inspect >sources tab (right to console) > click on ">>" near network > snippets > new snippet & rename file as index.js

// REFER rwaldron/idiomatic.js  ---> github repo for high level js concepts

// DATATYPES: string, number, boolean

alert(2+5); //5
typeof (123) //number
typeof ("simran")    //string
typeof (true)    //boolean

prompt("what is your name");  //used to input data from user


//keyword variableName = value;
var myName = "Simran";
myName = "Simran Gangwani";  //we can change the value of var

alert(myName);

var yourName = prompt('What is your name?')
alert("My name is "+myName+", welcome to my website "+yourName);

//TASK: swap the values of a & b
var a = "3";
var b = "8";

var x = a;    //x=3
a = b;        //a=8
b = x;        //b=3

console.log("a is " + a);   // a is 8
console.log("b is " + b);   // b is 3

// variable name 
//1. CANNOT begin with numbers: var 123name=simran;
//2. CAN contain numbers but not at start: var myName123= simran;
//3. CANNOT have spaces: var my name: simran;
//4. CAN ONLY contain LETTERS, NUMBERS, _ and $ ie var my_name$123= simran;

// string concatination
var message = "hello"
var myName = "Simran"
alert(message +" there, "+myName)

var myName = "Simran"
alert(myName.length)

// TASK: make twitter count
var tweet=prompt("Compose your tweet:")
alert("You have written "+tweet.length+", you have "+(140-tweet.length)+" characters left")

// slice method
var myName = "Simran"
myName.slice(0, 1);  //S  --> ie from 0 (index/position) but NOT including 1
myName.slice(5, 6);  //n    --> (6-5=1)
myName.slice(0, 3);  //Sim  
myName.slice(1, 5);  //imra  --> ie (5-1=4) 4 characters starting from position/index 1 OR from 1 but NOT including 5

// TASK: slicing tweet count to 140 characters only
var tweet=prompt("Compose your tweet:")
alert(tweet.slice(0,140))

// OOORRRRRRRRR
alert(prompt("Compose your tweet:").slice(0,140))

var myName = "Simran";
myName.toUpperCase()    //SIMRAN
myName = myName.toUpperCase();    //myName=SIMRAN
myName = myName.toLowerCase();   //myName=simran

// TASK:take username in any casing and show as "Simran" using slice() & casing methods only
var userName= prompt("What is your name?")
var firstChar= (userName.slice(0,1)).toUpperCase();
var restChar= (userName.slice(1,userName.length)).toLowerCase();
alert("Hello, "+ firstChar+restChar);

// MODULO OPERATOR
var y = 9 % 6;   //y=3

// precedence (first / and * , then second + and -)
var cost = 3 + 5 * 2    //3+10=13 (acc. to precedence)
var costWithBrackets = (3 + 5) * 2      //8+2=10

// TASK: dog age to human age convertor
// formula ==> humanAge = (dogAge - 2) * 4 + 21
var dogAge = prompt("What is your dog age ?")
humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog's humanAge is " + humanAge)

// INCREMENT & DECREMENT OPERATOR
var x = 5;
x = x + 1;    //6
//  ORRRR
x++;        //6

var y = 5;
y--   //4
// ORRRRRRR
y = y - 1   //4

// +=  AND -= AND  *= AND /= (used to inc. dcr. multiply or divide value by more than 1)
var x = 5;
x += 2;   //x=x+2 --> 7

var x = 5;
var y = 3;
x += y;  //x=x+y --> x=8

// FUNCTIONS IN JS

// we use same naming convention of function name as we did for variable naming
// 1. vanilla function
function getMilk() {   
   console.log("leaveHouse");
   console.log("moveRight");
   console.log("moveUp");
   console.log("moveRight");
   console.log("moveLeft");
   console.log("moveDown");
   console.log("moveLeft");
   console.log("enterHouse"); 
}
getMilk();

// 2. 
function getMilk (bottles) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveRight");
    console.log("buy "+bottles+" milk")
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("enterHouse");  
}

getMilk(2);

// *****************

function getMilk(money) {          //here money given is $5 and cost per bottle is $1.5
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveRight");
    console.log("buy " + Math.floor(money / 1.5) + " bottles of milk")
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("enterHouse");
}

getMilk(5);

// TASK : create a function which tell how many days, weeks and months we have if we live untill 90 years old.
function lifeInWeeks(age) {
    var lifeInDays = (90 - age) * 365;
    var lifeInWeeks = (90 - age) * 52;
    var lifeInMonths = (90 - age) * 12;

    console.log("You have " + lifeInDays + " days, " + lifeInWeeks + " weeks, and " + lifeInMonths + " months left.");
}

lifeInWeeks(2);

// 3. function which gives output/ returns a value
function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveRight");
    var numberOfBottles = Math.floor(money /1.5);
    console.log("buy "+ numberOfBottles+" bottles of milk")
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("enterHouse");

    return money%1.5;
}

var change = getMilk(4);
console.log(change)

// OORRRRRR

function getMilk(money, costPerBottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveRight");
    console.log("buy "+calcBottles(money, costPerBottle)+ " bottles of milk")
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money, 1.5);
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles= Math.floor(startingMoney/costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello master, here is your "+getMilk(5, 1.5)+ " change");

// TASK: calculate the BMI
function bmiCalculator(height, weight) {
    var bmi= weight/ Math.pow(height,2);
    return Math.round(bmi);
}

var bmi= bmiCalculator(60, 1.8);
console.log(bmi);