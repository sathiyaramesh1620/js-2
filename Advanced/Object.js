const person ={
    name:'sathiya',
    age:'30',
    gender:'Female'

}
const jobObject={
    job:'developer',
    salary:'30000'
}
//get all object keys
console.log(Object.keys(person))//[ 'name', 'age', 'gender' ]
//get all object values
console.log(Object.values(person))//[ 'sathiya', '30', 'Female' ]
// get all object entries
console.log(Object.entries(person))//[ [ 'name', 'sathiya' ], [ 'age', '30' ], [ 'gender', 'Female' ] ]
//assign object to another object
 console.log(Object.assign(person))//
console.log((Object.assign(person,jobObject)))