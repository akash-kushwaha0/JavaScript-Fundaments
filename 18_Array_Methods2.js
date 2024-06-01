// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [122, 332, 432, 423, 232, 322, 323]
// console.log(num.length)
// delete num[0] // delete will delete the object property, but it will not reindex the array or update its length
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// sort method
// let compare = (a, b)=>{
//     return b - a
// }
// let num = [122, 332, 432, 423, 232, 322, 323]
// num.sort(compare)
// num.reverse()
// console.log(num)

// Splice and Slice
let num = [122, 332, 432, 423, 232, 322, 323]
// let deleteValues = num.splice(2, 4, 3232, 322, 3223, 322, 323)
// console.log(num)
// console.log(deleteValues)

// let newNum = num.slice(3)
let newNum = num.slice(3, 5)
console.log(newNum)
