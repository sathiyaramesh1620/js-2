let employee=[
    {id:"1",name:"uncle",Email:"uncle.com"}
,{id:"2",name:"aunt",Email:"aunt.com"}
]
let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        let flag=true;
        setTimeout(() => {
            employee.push(emp)
            flag?resolve("success"):reject("fail")
        }, 3000);
    })
}
let getEmployee=()=>{
    setTimeout(()=>{
        let row=""
        employee.forEach((e)=>{
             row=row+`<tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.Email}</td>
            </tr>`
        })
        document.getElementById('data1').innerHTML=row
    },1000)
    
}
createEmployee({id:"3",name:"amutha",Email:"aumtha.com"}).then((msg)=>{
    console.log(msg);
    getEmployee()

}).catch((err)=>{
    console.log(err);
})
