// Q-1 Create a variable of type string and try to add a number to it.
let a = "Akash"
let b = 7;
console.log(a+b)

// Q-2 Use typeof operator to find the datatype of the string in last question
console.log(typeof (a))

// Q-3 Create a const object in javascript. Can you change it to hold a number later?
const a1 = {
    name: "Akash",
    section: 1,
    isPrinciple: false
}
// a1 =  45 // Can not hold it to a number

// Q-4 Try to add a new key to the const object in Problem 3. were you able to do it?
a1['friend'] = "friend0"
a1['name'] = "friend1"
console.log(a1)

// Q-5 Write a JS program to create a word-meaning dictionary of 5 words.
const dict = {
    it: "used to refer to a thing previously mentioned or easily identified.",
    ok: "used to express agreement or acceptance.",
    search: "try to find something by looking or otherwise seeking carefully and thoroughly.",
    happy: "feeling or showing pleasure or contentment.",
    programming: "the process or activity of writing computer programs."
}

console.log(dict.it)