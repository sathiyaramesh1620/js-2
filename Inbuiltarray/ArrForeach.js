//foreach() array mtd does not change anything in the original array & it does not return anything.
//The multiplication is done & its result is discarded.  
const arr = [1,2,3]
arr.forEach((e)=>{e*2})

console.log(arr)