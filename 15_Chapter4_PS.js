// Q-1 What will the following print in JS?
console.log("har\"".length)

// Q-2 Explore the includes, startsWith & endsWith function of a String
const sentence = 'The quick brown fox jumps over the lazy dog.'
const word = 'fox'
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in a sentence`)

// Q-3 Write a program to concat a given string to lowercase
console.log(word.toLowerCase())
console.log(word.toUpperCase())

// Q-4 Extract the amount out of this string 
//     "Please give RS1000"
let str1 = "Please give Rs 1000"
let amount = str1.slice("Please give Rs".length)
console.log(amount)

// Q-5 Try to Change 4th character of a given sring. Were you able to do it?
let friend = "Deepika"
friend[3] = "R"
console.log(friend) // friend is not changed, because string is immutable 