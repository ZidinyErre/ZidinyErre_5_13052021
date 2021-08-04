fetch("http://localhost:3000/api/cameras")
.then(res => res.json())
.then(function(value){
    displayProducts(value);    
})

const displayProducts = (products) => {
    products.forEach(product => {
        console.log(product);
        document.querySelector(".row").innerHTML +=
        `<div class="col-md-6 col-lg-6 justify-content-center">
            <div class="card align-self-start" style="width: 18rem;">
                <a href="customization.html?id=${product._id}" class="photo"><img width="100%" src='  ${product.imageUrl}  '></a>
                <div class="card-body">
                    <p>  ${product.name}  </p>  <p>   ${product.price/100} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-euro" viewBox="0 0 16 16">
                    <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"/>
                  </svg></p>  <p>  ${product.description}  </p>
                </div>
            </div>
        </div>`

    });
}
