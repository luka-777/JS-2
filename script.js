// 1)
let firstName = "Luka";
let lastName = "Giunashvili";
let address = "Gori";
let age = "19";
let job = "hotel"
let skill = "to solve the problem easily"

let user2 = `hello, I am ${firstName} and my lastName is ${lastName} I was born in ${address}, my main skill is ${skill}, I am ${age} years old and work in a ${job}`;
console.log(user2)


// 2)
let number = 20;
let year = 10;

let result1  = number < year || number < year; // false
let result2  = number > year && number > year; // true
console.log(result1);
console.log(result2);

// 3)
let x=55;
x++;
console.log(x);
x=x-3;
console.log(x);

// 4)
let a = 10;
let b = 12;
let andOperator = a < 9 && b >= 11; //result false> : 
let orOperator = a > 11  || b < 10; //result false> :
let notOperator = !(a > 10); //result true> :
console.log(andOperator);
console.log(orOperator);
console.log(notOperator);