let basket = [];
if ( !(typeof localStorage.getItem("basket") == 'string' && !localStorage.getItem("basket").trim() || typeof localStorage.getItem("basket") == 'undefined' || localStorage.getItem("basket") === null)) {
    basket = JSON.parse(localStorage.getItem("basket"));
}
// j'utilise une boucle for pour les parcourires les données du panier  puis les affiché à l'aide d'innerHtml
for (let i = 0; i < basket.length; i++) {

    document.querySelector(".base_basket").innerHTML +=
   ` <tr class="col-sm-8">
        <td class="imgtableau2"><img class="imgtableau" src='  ${basket[i].img}  '></td>
        <td>${basket[i].name}</td>
        <td>${basket[i].prix/100+".00"+"€"}</td>
        <td>${basket[i].quantity}</td>
        <td><button data-id="${i}" class="supp-un btn btn-outline-danger">Supprimer</button></td>
    </tr>
    `
    
    
}

// Ici je calcul le panier total et comme le nombre de produit varie j'utilise une boucle for
// Prix multiplier par quantité
 let totalPrixPanier = [] ;
 for (let j = 0; j < basket.length; j++) {
    let prixPanier = basket[j].prix * basket[j].quantity;
    totalPrixPanier.push(prixPanier);

}
// Somme de tout le panier
const reducer = (accumulator,currentValue) => accumulator + currentValue;
const calculPrix = totalPrixPanier.reduce(reducer);
const divTotal = document.querySelector(".total");
divTotal.innerHTML = ` <div>
Total : <span>${calculPrix/100 + " .00" + "€"}</span>
</div>`;

// Suppression unique

let buttonSupp = document.querySelectorAll(".supp-un");

for (let e = 0; e < buttonSupp.length; e++) {
    buttonSupp[e].addEventListener('click', (event) => {
        event.preventDefault();
        console.log("yes");
        const index = basket.indexOf(event);

        basket.splice(index, 1);
        localStorage.setItem('basket',JSON.stringify(basket));
        location.reload();
    })    
}



// Vider le panier
let vider = document.querySelector(".supprimer");
    vider.addEventListener('click', () => {
        localStorage.removeItem("basket");
        location.reload();
    })


// FORMULAIRE


    
class Visitor {
    constructor(firstName, lastName, address, city , email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.email = email;
    }
}


let envoie = document.querySelector(".valid");
envoie.addEventListener('click', function(){
    
    let productArray = [];

    let firstName = document.querySelector(".nom").value;
    let nameRegex = /^[A-Za-z]{3,20}$/;
        if(!nameRegex.test(firstName)){        
        alert("Veuillez remplir correctement les champs.")
        window.location = 'basket.html';        
        } 

    let  lastName = document.querySelector(".prénom").value;
        if(!nameRegex.test(lastName)){        
            alert("Veuillez remplir correctement les champs.")
            window.location = 'basket.html';        
        
        } 


    let  city = document.querySelector(".ville").value;
        if(!nameRegex.test(city)){        
            alert("Veuillez remplir correctement les champs.")
            window.location = 'basket.html';        
        
        } 

    let  email = document.querySelector(".mail").value;
    let  emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if(!emailRegex.test(email)){        
        alert("Veuillez remplir correctement les champs.") 
        window.location = 'basket.html';        
       
    }

    let addressRegex = /^[a-zA-Zà-żÀ-Ż-0-9+\s+-]+$/;
    let address = document.querySelector(".adresse").value;
    if(!addressRegex.test(address)){        
        alert("Veuillez remplir correctement les champs.")  
        window.location = 'basket.html';        
      
    }

    let aVisitor = new Visitor(
        document.querySelector(".nom").value,
        document.querySelector(".prénom").value,
        document.querySelector(".adresse").value,
        document.querySelector(".ville").value,
        document.querySelector(".mail").value
        );
    
    let result = {
        contact : {
            firstName : aVisitor.firstName,
            lastName : aVisitor.lastName,
            address: aVisitor.address,
            city : aVisitor.city,
            email : aVisitor.email
        },
    
        products: productArray
    }

    fetch('http://localhost:3000/api/cameras/order',{
        method:'POST',
        headers : {
            'Content-type': 'application/json' 
        },
        body : JSON.stringify(result)
    })

    .then(reponse => reponse.json())
    .then(response => {
        localStorage.clear();
        let objetCommande = {
            idCommande : response.orderId,
            prixTotal : calculPrix
        }
        let commande = JSON.stringify(objetCommande);
        localStorage.setItem('commande',commande);
        window.location = 'confirm.html';
    })
});




