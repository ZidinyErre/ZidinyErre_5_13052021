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
                <img width="100%" src='  ${element.imageUrl}  '>
                <div class="card-body">
                    <p>  ${element.name}  </p>  <p>   ${element.price/100} euros  </p>  <p>  ${element.description}  </p>
                </div>
            </div>
        </div>`
}