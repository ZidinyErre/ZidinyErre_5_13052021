// Je récupére l'id à l'intérieur de l'url
const url_string = window.location.href;
const url = new URL(url_string);
const id = url.searchParams.get("id");

// Je rajoute l'id a l'API Fetch pour récupérer le bon produit
fetch("http://localhost:3000/api/cameras/" + id)
.then(res => res.json())
.then(function(value){
    recover(value);
});

const recover = (element) => {

    let focale = document.querySelector(".focale");

    // Création et mise en place du nom du produit
    let name = document.querySelector(".name");
    name.innerHTML = element.name;
    
    // Création et mise en place de la photo
    let imgAppareil = document.querySelector(".img");
    imgAppareil.setAttribute('src', element.imageUrl);

    // Création et mise en place du prix
    let price = document.querySelector(".montant");
    price.innerHTML = element.price/100+".00" + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-euro" viewBox="0 0 16 16"><path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"/></svg>';

    // Création et mise en place du select
    let select = document.createElement("select");
    select.classList.add("drop");
    focale.appendChild(select);

    // Définition de la premier option de focale
    let firstOption = document.createElement("option");
    firstOption.setAttribute('disabled', "disabled");
    firstOption.setAttribute('value', "0");
    firstOption.setAttribute('selected', "true");
    firstOption.textContent = "Choisissez la focale";
    select.appendChild(firstOption);

    // Définition des autres options de focale
    for( i = 0; i<element.lenses.length; i++){
        let optionLenses = document.createElement("option");
        select.appendChild(optionLenses);
        select.classList.add("choix");
        optionLenses.setAttribute('value', "1");
        optionLenses.textContent = element.lenses[i];
    }


    // Création et mise en place du texte
    let description = document.querySelector(".texte");
    description.innerHTML = element.description;

    

    // Ici on crée les variables qui vise l'input et les deux boutons et on crée une variable avec la fonction parsInt pour rendre que des nombres décimales
    let init = document.querySelector(".form-control").value = 1 ;
    let initialisation = parseInt(init, 10);
    let moins = document.getElementsByClassName('moins') ;
    let plus = document.getElementsByClassName('plus') ;
    // La on crée une condition sur chaque bouton plus et moins.J'ai mis un [] car sinon le boutons renvoyé null.   
    moins[0].addEventListener('click', function(){
        if (initialisation > 1 && initialisation <= 20 ) {
            initialisation--;
            document.querySelector(".form-control").value = initialisation;
       }

    });
    plus[0].addEventListener('click', function(){
        if (initialisation >= 1 && initialisation < 20 ) {
            initialisation++;
            document.querySelector(".form-control").value = initialisation;
        }
    });
    //Dans les deux conditions if précèdentes on rajoute à la variable initialisation les valeurs de l'input



    // On envoie grâce l'événement du clique les données dans le panier
    document.querySelector(".btn-validation").addEventListener("click", function(){
        let select = document.querySelector(".drop");
        let choixFocales = select.selectedIndex;
        console.log(choixFocales);
        if (choixFocales == 0) {
            alert("N'oubliez pas votre lentille :)") 
        }
        else if (confirm("Avez-vous fait votre choix ? ")) {
            
            let old_basket = [];
            if ( !(typeof localStorage.getItem("basket") == 'string' && !localStorage.getItem("basket").trim() || typeof localStorage.getItem("basket") == 'undefined' || localStorage.getItem("basket") === null)) {
                old_basket = JSON.parse(localStorage.getItem("basket"));
            }
            let lePanier = {
                id : element._id,
                name : element.name,
                prix : element.price,
                lentille : choixFocales.label,
                img : element.imageUrl,
                quantity : initialisation
            }
            old_basket.push(lePanier);
            localStorage.setItem("basket", JSON.stringify(old_basket));

            window.location.href = "basket.html";


        }else{
            window.location.href = "index.html";
        }
    });

    
}


