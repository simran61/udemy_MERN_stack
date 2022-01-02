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
function getMilk(bottles) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveRight");
    console.log("buy " + bottles + " milk")
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
    var numberOfBottles = Math.floor(money / 1.5);
    console.log("buy " + numberOfBottles + " bottles of milk")
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("enterHouse");

    return money % 1.5;
}

var change = getMilk(4);
console.log(change)

// OORRRRRR

function getMilk(money, costPerBottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveRight");
    console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk")
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money, 1.5);
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello master, here is your " + getMilk(5, 1.5) + " change");

// TASK: calculate the BMI
function bmiCalculator(height, weight) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}

var bmi = bmiCalculator(60, 1.8);
console.log(bmi);

// *******************************
// Section 10: Intermmediate JavaScript
// *******************************

// Math.random()   --> this generates a 16 digit decimal number b/w 0 to 0.9999999999999999 --> it never gives 1

var n = Math.random(); //psuedo random generator as comp. is a giant box of on-off (1-0) switches and comp. do all its work through these switches

// refer KHAN ACADMEY VIDEO to understand diff b/w RANDOM & PSEUDO RANDOM

console.log(n);  // 0.43456787623986533
n = n * 6;  // 2.607407257439192  --> by this the highest no. we'll get is 5.99 it never reaches 6
//*BY 6 AS WE WANTED NUMBERS TILL 6
n = Math.floor(n) + 1;   //by Math.floor it will always show rage 0-5 so adding 1
console.log(n)      //1,2,3,4,5,6

// TASK: MAKE A LOVE CALCULATOR
var firstName= prompt('Enter first name');
var secondName= prompt('Enter second name');

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
    alert('Your love score is '+loveScore+" %. You love each other like Kanye love Kanye")
} if (loveScore > 30 && loveScore <= 70) {
    alert('Your love score is '+loveScore+" %.")
}
if (loveScore <= 30) {
    alert("Your love score is "+loveScore+"%. You go together like oil and water")
}

// COMPARATOR OPERATORS
// === --> is equal to (CHECKS DATA TYPE AS WELL)
// !== --> is not equal to
// == --> (ONLY CHECKS VALUE, DOES NOT CHECK DATATYPE)

var a = 1;
var b = "1";
typeof (a);  //number
typeof (b);  //string
// a===b ---> FALSE
// a==b ---> TRUE

// && AND (if cond1 is true AND cond2 is true)
// || OR (if EITHER cond1 is true OR cond2 is true)
// ! NOT


//TASK: LEAP YEAR CALCULATOR
function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "leap year"
            } else {
                return 'not leap year'
            }
        } else {
            return "leap year"
        }
    } else {
        return "not leap year"
    }
}
// refer FLOWCHART from IMAGES folder

// ARRAY: collection of related data in same container 

var guestList=['simran', 'manav', 'naisha', 'yash'];
var guestName= prompt('What is your name?')
 if(guestList.includes(guestName)){
 alert('You are welcome '+guestName)
 }else{
 alert("Sorry, "+guestName+". May be next time.")
 }

// TASK: Write a prog. that prints numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for multiples of five print "Buzz". For number which are multiples of both three and five print "FizzBuzz"
var output = [];
var count = 1;

function fizzBuzz() {
    for (var count = 1; count < 101; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("Fizz-Buzz")
        }
        else if (count % 3 === 0) {
            output.push("Fizz")
        } else if (count % 5 === 0) {
            output.push("Buzz")
        } else {
            output.push(count)
        }
    }
    console.log(output)
}

fizzBuzz()


// TASK: WHOS'S BUYING LUNCH
var names = ['simran', 'manav', 'yash', 'rohan', 'naisha']
function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}

var payingName = whosPaying(names);
console.log(payingName)

// TASK: TO PRINT THE SONG 99 BOTTLES OF BEER SONG USING WHILE LOOP
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// TASK: FIBONACCI SERIES
// REFER images folder for FLOWCHART
function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1]
    }
    else {
        output = [0, 1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

output = fibonacciGenerator(5);
console.log(output);    //[0, 1, 1, 2, 3]