// Chapter-2 Practice Set

// Q-1 Use logical operators to find whether the age of a person lies between 10 and 20
const prompt=require("prompt-sync")({signit:true});
// let age = prompt("Whats is you age?")
// if(age>10 && age<20){
//     console.log("Your age lies between 10 and 20")
// }
// else{
//     console.log("Your age doesnt lies between 10 and 20")
// }

// Q-2 Demonstrate the use of switch case statement in JS
// let age = prompt("Whats your age?")
// switch(age) {
//     case '12':
//         console.log("Your age is 12")
//         break
//     case '13':
//         console.log("Your age is 13")
//         break
//     case '14':
//         console.log("Your age is 14")
//         break
//     case '15':
//         console.log("Your age is 15")
//         break
//     default:
//         console.log("Your age is not special")
// }


// Q-3 Write a JS program to find whether a number is divisible by 2 and 3
// let num = prompt("Enter your number")
// num = Number.parseInt(num)
// if(num % 2 == 0 && num % 3 == 0){
//     console.log("Your number is divisible by 2 and 3")
// }
// else {
//     console.log("Your number is not divisible by 2 and 3")
// }

// Q-4 Write a JS program to find whether a number is either divisible by 2 and 3

// Q-5 Print "You can drive" or "You cannot drive based on age being greater than 18 using ternary operator"
let age = 18
let a = age>=18? "You can drive" : "You cannot drive"
console.log(a)