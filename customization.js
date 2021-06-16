const url_string = window.location.href;
const url = new URL(url_string);
const id = url.searchParams.get("id");



fetch("http://localhost:3000/api/cameras/" + id)
.then(res => res.json())
.then(function(value){
    recover(value);
});


const recover = (element) => {
    console.log(element);
    document.querySelector(".row").innerHTML +=
    `<div class="col d-flex justify-content-center">
        <div class="card " style="width: 18rem;">
            <p class="align-self-center">  ${element.name}  </p>  
            <img width="100%" src='  ${element.imageUrl}  '>
            <div class="card-body">
                <p>   ${element.price/100} euros  </p>
                <select class="drop">
                </select>
                <p>  ${element.description}  </p>
                <button type="button" class="btn btn-primary ">Ajouter</button>
            </div>
        </div>
    </div>`

    element.lenses.forEach(function(lense) { 
        document.querySelector(".drop").innerHTML += `<option>${lense}</option>`
        
    });
    
    
    document.querySelector(".btn").addEventListener('click', function(cliquer){
        const panier = JSON.parse(localStorage.getItem("panier"));
        panier.push();
        console.log(panier);
        localStorage.setItem("panier", JSON.stringify([element._id]));

    });
}

// function passValues(){
//     document.getElementsByClassName("btn").value;
//     localStorage.setItem("nom", `${element.name}` );
//     localStorage.setItem("prix" , `${element.price/100}` );
//     return false;
// }
