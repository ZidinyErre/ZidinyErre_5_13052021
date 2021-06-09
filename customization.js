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
    const x = element.lenses;
    x.forEach(function(y) 
        { 
           document.querySelector(".drop").innerHTML += `<option>${y}</option>` 
    });
}
// localStorage.setItem()