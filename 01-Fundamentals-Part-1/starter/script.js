let js = "amazing";

console.log(23 + 2 + 5);

console.log("Jonas");
console.log(23);

let firstName = "Mathilda";
let lastName = "Professional";

console.log(firstName);
console.log(firstName);

// Name is a reserved keyword but is still legal.
// Objects start with capitals.
// Constants should be uppercase.
// Variable names should be descriptive.

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

// These are less descriptive
let job1 = "programmer";
let job2 = "teacher";

// There are 7 Primitive Data Types
//
// 1. number
// 2. string
// 3. boolean
// 4. undefined - value taken by a variable that is not yet defined ('empty value')
// 5. null - also an empty value
// 6. Symbol - value that is unique and can't be changed
// 7. BigInt - larger integers than the Number type can hold
//
// Dynamic typing is used where we do not have to manually define the data type of
// the value stored in a variable.

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// let allows for reassigning a value to a variable
let age = 30;
age = 31;

// const restricts reassignment and cannot be undefined.
const birthYear = 1992;
// birthYear = 1990;
// const job;

// var was used before ES6 and is not a preferred method.
var job = "programmer";
job = "teacher";

// math operator examples
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(ageJonas);
console.log(ageJonas ** 2); //squared

// assignment operators
// let x = 10;
// x += 10;
// x *= 4;
// x++;
// x--;
// ++x;
// --x;

//comparison
console.log(ageJonas > 100);
console.log(ageJonas <= 100);

//operator precedence
let x, y;
x = y = 25 - 10 - 5; // x = y = 10; x =10
console.log(x);

const averageAge = (ageJonas + ageSara) / 2;
console.log(ageJonas, ageSara, averageAge);
