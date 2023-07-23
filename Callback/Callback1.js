let sum=(a,b)=>{
    return a+b
}
let calculate=(a,b,callback)=>{
    return callback(a,b)
}
let sub=(a,b)=>{
    return a-b
}

let r1=sum(1,2,sum)
console.log(r1)
let r2=sub(10,3,sub)
console.log(r2)
