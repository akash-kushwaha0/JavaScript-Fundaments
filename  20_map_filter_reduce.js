  let arr = [ 43, 32, 23]
  // Array map method
//   let a = arr.map((value, index, array)=>{
//     console.log(value, index, array)
//     return value + index
//   })
//   console.log(a)
 
  // Array filter method
  let arr2 = [43, 34, 1, 32, 3, 4, 5]
  let a2 = arr.filter((a)=>{
    return a<10
  })
  console.log(a2, arr2)

  // Array reduce method
  let arr3 = [1,2,3,4,5,2,1]
  let newarr3 = arr3.reduce((h1, h2) => {
    return h1 + h2
  })

  console.log(newarr3)