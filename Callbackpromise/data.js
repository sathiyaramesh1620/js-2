let employee=[{id:"102",name:"rockshana",Email:"rocksha@gmail.com"},
{id:"103",name:"harish",Email:"harish@gmail.com"}
]
let createemployee=(emp,callback)=>{
setTimeout(()=>{
    employee.push(emp)
    callback()
},3000)

}
let getemployee=()=>{
    setTimeout(()=>{
        let row=''
        employee.forEach((e)=>{
return row=row+`<tr>
<td>${e.id}</td>
<td>${e.name}</td>
<td>${e.Email}</td>
</tr>`
        })
        document.getElementById('data').innerHTML=row
    },1000)

}
createemployee({id:"104",name:"anbu",Email:"anbu@gmail.com"},getemployee)
