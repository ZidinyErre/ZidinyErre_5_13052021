fetch("http://localhost:3000/api/cameras")
.then(res => res.json())
.then(function(value){
    displayProducts(value);    
});

const displayProducts = (products) => {
    products.forEach(product => {
        console.log(product);
        document.querySelector(".col").innerHTML += "<img> "+ product.imageUrl + "</img>";
        document.querySelector(".col").innerHTML += "<p> "+ product.name + "</p>";
        document.querySelector(".col").innerHTML += "<p> "+ product.price + "</p>";
        document.querySelector(".col").innerHTML += "<p> "+ product.description + "</p>";



    });
}


