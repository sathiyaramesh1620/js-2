const fruits=['Apple','Banana','Grapes','Orange','Strawberry','Apple'];
//converts the array to string
console.log(fruits.toString());//Apple,Banana,Grapes,Orange,Strawberry,Apple 
//add element @ the end of array
console.log(fruits.push('pineapple'))
console.log(fruits.toString())//Apple,Banana,Grapes,Orange,Strawberry,Apple,pineapple
//removes the last element of array
console.log(fruits.includes('Banana'))//
//returns the  index of element
console.log(fruits.indexOf('Stawberry'))
// join the elements of array with the given separator
console.log(fruits.join('+'))
//return a portion of array
console.log(fruits.slice(2,3))
//add elements to array
console.log(fruits.splice(2,6))