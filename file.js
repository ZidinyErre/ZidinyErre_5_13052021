fetch("http://localhost:3000/api/cameras")
.then(res => res.json())
.then(function(value){
    displayProducts(value);    
});

const displayProducts = (products) => {
    products.forEach(product => {
        console.log(product);
        document.querySelector(".col").innerHTML += `<img width="250" src='  ${product.imageUrl}  '>` + `<p>  ${product.name}  </p>` + `<p>   ${product.price/100} euros  </p>` + `<p>  ${product.description}  </p>` ;
    });
}

