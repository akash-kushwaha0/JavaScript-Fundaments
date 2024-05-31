// Program to add first n natural numbers
// const prompt=require("prompt-sync")({signit:true});
// let sum = 0 
// let n = prompt("Enter the value of n: ")
// n = Number.parseInt(n)
// for(let i = 0; i < n; i++){
//     sum += (i + 1)
// }
// console.log("Sum of first " + n + " natural numbers is " + sum)

let obj = {
    item0: 29,
    item1: 44,
    item2: 53,
    item3: 89
}

// For in loop
for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}
 
// For of loop
for (let b of "akash"){
    console.log(b)
}