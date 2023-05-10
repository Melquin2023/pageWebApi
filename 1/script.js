const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
.then(res =>res.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))

const mostrarData = data =>{
    console.log(data)
let body=""
    for(let i=0; i<data.length; i++){

        body += `<tr"><td> ${data[i].id}</td> <td> ${data[i].name}</td> <td> ${data[i].email}</td> <td> ${data[i].phone}</td> <td> ${data[i].website}</td></tr>`

    }
    document.getElementById('data1').innerHTML = body
}

