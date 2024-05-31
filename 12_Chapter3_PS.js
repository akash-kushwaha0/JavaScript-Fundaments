let marks = {
    harry: 90,
    shubham: 24,
    lovish: 32,
    monika: 45
}

/* Q-1 Write a program to print the marks of a student in an object using for loop
for( let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

*/

// Q-2 Write a program in Q-1 using for in loop
// for( let key in marks){
//     console.log("The marks of " + key + " are " + marks[key])
//     // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
// }

// Q-3 Write a program to print "try again" until the user enters the corrent answer
// const prompt=require("prompt-sync")({signit:true});
// let cn = 4
// let i 
// while (i != cn){
//     console.log("Try again")
//     i = prompt("Enter a number: ")
// }
// console.log("You have entered a correct number")

// Q-4 Write a function to find mean of 5 number
const mean = (a, b, c, d)=> {
    return (a + b + c + d) / 4
}
console.log(mean(4, 5, 6, 7))