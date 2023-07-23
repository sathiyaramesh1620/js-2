let employee=[
    {id:"101",name:"sathiya",email:"sathiya@gmail.com"},
    {id:"102",name:"ramesh",email:"ramesh@gmail.com"},

]
let createEmployee=(emp)=>{
    setTimeout(()=>{
        employee.push(emp)
    },3000)

}
let getEmployee=()=>{
    setTimeout(()=>{

let row=""
employee.forEach((emp)=>{
  return  row=row+`<tr>
    <td>${emp.id}</td>
    <td>${emp.name}</td>
    <td>${emp.email}</td>

    </tr>`

})


        document.getElementById('data').innerHTML=row
    },2000)
}
createEmployee({id:"103",name:"harish",email:"rocksha@gmail.com"},
)
getEmployee()