//bcz var can be updated,re-declared& re-initialized within its scope
var num= 3
var num=1
console.log(num)

let x=[]
let y=[]
let z=x+y
console.log(typeof z)

var a=1
function func(){
    a=2
    return a
}
console.log(a+func())