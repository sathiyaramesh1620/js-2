// includes() returns an Boolean values of true if an array contains a specified value(case sensitive).
//if the value is not found returns false 

// syntax => array.includes(element, start)

const num=[1,2,3,5]
console.log(num.includes(0))//f
const string=["Cat","Dog","Elephant","Fish"]
console.log(string.includes("sathiya"))//False
console.log(string.includes("Dog"))//true