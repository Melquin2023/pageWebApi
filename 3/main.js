function printCards(array = []){
    
    console.log(array)
   
    let arrayOfCards=""

    for(let i=0; i <27; i++){
        let item = array.message[i]
        arrayOfCards += `
        <div class="card" style="width: 20rem; ">
        <img src="${item}" class="card-img-top" alt="imagen perro">
        <div class="card-body">
        <p>${array.status} </p>
        </div>
      </div> `
    }
    document.getElementById("printer").innerHTML =arrayOfCards
}

 function getCaracters(){
     //devuelve personajes q yo le indique 
     //1. define url del api
     const url = ("https://dog.ceo/api/breed/hound/images")
     //2. consumir la url con fecht
     fetch(url)
     .then(response => response.json())
     .then(data => {
             printCards(data)
         })
         .catch(error => {
             console.log(error)
     })
}
getCaracters()



