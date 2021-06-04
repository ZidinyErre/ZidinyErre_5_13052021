console.log(window.location);
const url_string = window.location.href;
const url = new URL(url_string);
console.log(url);
const id = url.searchParams.get("id");

fetch("http://localhost:3000/api/cameras/" + id)
.then(res => res.json())
.then(function(value){
    console.log(value);
    recover(value);
});

const recover = (element) => {
        console.log(element);
        document.querySelector(".row").innerHTML +=
        `<div class="col d-flex justify-content-center">
            <div class="card align-self-start" style="width: 18rem;">
                <p>  ${element.name}  </p>  
                <img width="100%" src='  ${element.imageUrl}  '>
                <div class="card-body">
                    <p>   ${element.price/100} euros  </p>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Objectif
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">`
                            const Objectifs = element.lenses;
                            Objectifs.forEach(item => {
                                console.log(item);
                            });
                            `<li><a class="dropdown-item" href="#"> ${item} </a></li>`

                        `</ul>
                    </div>  
                    <p>  ${element.description}  </p>
                </div>
            </div>
        </div>`
}