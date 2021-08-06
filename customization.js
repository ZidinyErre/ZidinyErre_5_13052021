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
    // carte Bootstrap
    let card = document.querySelector(".card");

    // Création et mise en place de la photo
    let imgAppareil = document.createElement("img");
    imgAppareil.classList.add("imgAppareil");
    imgAppareil.setAttribute('src', element.imageUrl);
    card.prepend(imgAppareil);

    // Création et mise en place du nom du produit
    let name = document.createElement("h2");
    name.classList.add("name");
    name.classList.add("align-self-center");
    name.innerHTML = element.name;
    card.prepend(name);

    // Création et mise en place du prix
    let price = document.createElement("p");
    price.classList.add("montant");
    price.classList.add("align-self-center");
    price.innerHTML = element.price/100+".00" + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-euro" viewBox="0 0 16 16"><path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"/></svg>';
    card.append(price);

    // Création et mise en place du select
    let select = document.createElement("select");
    select.classList.add(".drop");
    card.append(select);

    // Création et mise en place du texte
    let description = document.createElement("p");
    description.classList.add("text");
    description.classList.add("text-center");
    description.innerHTML = element.description;
    card.append(description);

    // Définition de la premier option de focale
    let firstOption = document.createElement("option");
    firstOption.setAttribute('disabled', "disabled");
    firstOption.setAttribute('value', "0");
    firstOption.setAttribute('selected', "true");
    firstOption.textContent = "Choisissez la focale";
    select.prepend(firstOption);

    // Définition des autres options de focale
    for( i = 0; i<element.lenses.length; i++){
        let optionLenses = document.createElement("option");
        select.appendChild(optionLenses);
        select.classList.add("choix");
        optionLenses.setAttribute('value', "1");
        optionLenses.textContent = element.lenses[i];
    }

    let initialisation = document.querySelector(".form-control").value = 1 ;
    let moins = document.getElementsByClassName('moins') ;
    let plus = document.getElementsByClassName('plus') ;
    
    
    // let result = document.querySelector("#resultat")
    //  res = result.value;
    moins.addEventListener('click', function(){
        if (result > 1 && result <= 20 ) {
            result--;
            // document.getElementById('resultat').value = result;
        }

    });

    plus.addEventListener('click', function(){
        if (result >= 1 && result < 20 ) {
            result++;
            // document.getElementById('resultat').value = result;
        }
    });
    

    document.querySelector(".btn").addEventListener("click", function(){
        let select = document.querySelector(".drop");
        let choixFocales = select.selectedIndex;
        if (choixFocales == 0) {
            alert("N'oubliez pas votre lentille :)") 
        }
        else {
            let lePanier = {
                id : element._id,
                name : element.name,
                prix : element.price,
                img : element.imageUrl,
                quantity : result
            }
            let panier = JSON.stringify(lePanier);
            localStorage.setItem("basket", panier);
            alert(message = "Merci");
        }
        
    });

    
    
    // document.querySelector(".btn").addEventListener('click', function(){
    //     let panier = JSON.parse(localStorage.getItem("panier"));
    //     if (panier == null) {
    //         panier = [];
    //     }
    //     panier.push(element._id);
    //     localStorage.setItem("panier", JSON.stringify(panier));

    // });
}


