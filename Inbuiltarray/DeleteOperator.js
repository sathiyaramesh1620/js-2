
// syntax => delete array[index];
//Array elements can be deleted using the JS opeartor delete & using delete leaves undefined holes in the array
let fruits=["apple","Banana","Grapes"]
delete fruits[0]
console.log(fruits)//[ <1 empty item>, 'Banana', 'Grapes' ]    