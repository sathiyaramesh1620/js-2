var arr=[1,2,3,4,4,3,2,5,6,7,8,8]
function removeDuplicates(){
    return arr.filter((item,index)=>arr.indexOf(item)===index)
}
console.log(removeDuplicates(arr))
console.log(removeDuplicates(arr).length)






//default method for removing duplicate


let a=[1,2,3,2,3,4,5,66,66,5]
let b=[...new Set(a)]
console.log(b)
console.log(b.length)