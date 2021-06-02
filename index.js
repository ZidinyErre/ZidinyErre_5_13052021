fetch("http://localhost:3000/api/cameras")
.then(res => res.json())
.then(function(value){
    displayProducts(value);    
})

const displayProducts = (products) => {
    products.forEach(product => {
        console.log(product);
        document.querySelector(".row").innerHTML +=
        `<div class="col-md-6 col-lg-6 ">
            <div class="card align-self-start" style="width: 18rem;">
                <a href="personnalisation.html?id=${product._id}" class="photo"><img width="100%" src='  ${product.imageUrl}  '></a>
                <div class="card-body">
                    <p>  ${product.name}  </p>  <p>   ${product.price/100} euros  </p>  <p>  ${product.description}  </p>
                </div>
            </div>
        </div>`

    });
}
