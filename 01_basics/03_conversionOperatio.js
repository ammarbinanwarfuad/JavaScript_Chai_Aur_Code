let score = 33
let score1 = "33"
let score2 = "33abs"
let score3 = null
let score4 = undefined
let score5 = true
let score6 = "Ammar"

console.log(typeof score);
console.log(typeof (score1));

let valueInNumber = Number(score2)
console.log(typeof valueInNumber); // type Number
console.log(valueInNumber);// output NAN



let valueInNumber2= Number(score3)
console.log(typeof valueInNumber2)
console.log(valueInNumber2);

let valueInNumber3= Number(score4)
console.log(typeof valueInNumber3)
console.log(valueInNumber3);


let valueInNumber4= Number(score5)
console.log(typeof valueInNumber4)
console.log(valueInNumber4);

let valueInNumber5= Number(score6)
console.log(typeof valueInNumber5)
console.log(valueInNumber5);


/*
"33" = 33
"33abc" = NAN
true = 1; false = 0
*/

let isLoggedIn = 1
let isLoggedIn1 = ""
let isLoggedIn2 = "Ammar"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1)

let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2)


// 1=> true; 0=> false
// ""=> false
// "Ammar"=> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

