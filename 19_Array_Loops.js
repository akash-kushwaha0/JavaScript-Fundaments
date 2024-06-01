let num = [3, 4, 5, 7, 2]

// for(let i=0; i<num.length; i++){
//     console.log(num[i])
// }

// ForEach loop
// num.forEach((element) => {
//     console.log(element + element)
// })

// Array.from
let name = "Akash"
let arr = Array.from(name)
console.log(arr)

// for....of
for (let item of num){
    console.log(item)
}

// for...in
for (let i in num){
    console.log(num[i])
}