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
// let buttonSupp = document.querySelector(".supp-un");



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


// function removeIndex (arr, index){
//     arr.splice(index, 1);

//     return arr
// }

// let  baskets = basket.from(buttonSupp.children);
// buttonSupp.addEventListener('click', (event) => {
//     if (event.target.classList.contains("delete") ) {
//         const targetTr = event.target.parentElement.parentElement;
//         const index = basket.indexOf(targetTr);

//         if (basketArr === 1) {
//             localStorage.removeItem("basket");
//             window.location.reload();
//         } else {
//             basket.splice(index, 1);
//             localStorage.setItem("basket", JSON.stringify(basket));
//             window.location.reload();

//         }
        
//     }
// })



// let idBasket = basket.map(el => el.id);
// let buttonSupp = document.getElementsByClassName("supp-un");
// for (let j = 0; j < basket.length; j++) {
//     buttonSupp[j].addEventListener('click', () => {
//         console.log("yes");
//             basket.pop();
//     })
// }


// let lookup = {};
// for (let t = 0, len = basket.length; t < len; t++) {
//     lookup[basket[t].id] = basket[t];
// }

// localStorage.removeItem(basketArr);
    // location.reload();
// const sweetArray = [2, 3, 4, 5, 35]
// const sweeterArray = sweetArray.map(sweetItem => {
//     return sweetItem * 2
// })

// // let element = document.querySelectorAll('.supp-un[data-id="${i}"]');
// // let data = buttonSupp.getItem;
// buttonSupp.addEventListener('click', function(){
//     alert("coucou");
//     // alert(data);
// });
// let removeIndex = basket.map(item => item.id).indexOf(basket.dataset-id);

// function removeItem(id){
//     let arrId = [];
//     basket.forEach(element => {
//         arrId.push(element.id);
//     });
//     if (arrId[id] == id){
//         delete basket.indexOf(id);
//     }else{
//         return false;
//     }
//     localStorage.setItem('basket',JSON.stringify(basket));

// }


// basket.forEach(object => {
//    buttonSupp.addEventListener('click', () => {
//         if (basket[object].index > -1) {
//                     object--;
//                 }else{
//                 basket.splice(object, 1);
//                 }
//                 localStorage.setItem('basket',JSON.stringify(basket));
//         }
//     )

// });
// localStorage.setItem("basket", JSON.stringify(basket));
    

// for (let l = 0; l < buttonSupp.length; l++) {
//     buttonSupp[l].addEventListener('click', () => {

//         let idBasket  = basket.id;
//         let idSelection = basket[l].idBasket;
//         console.log(idSelection);

//        basket = basket.filter(el => el.idBasket !== idSelection);

//     });
//     localStorage.setItem("basket", JSON.stringify(basket));

// }



// function suppCamera(id){
//     let camera = basket[id];
//     if (camera > 1) {
//         camera--;
//     }else{
//        basket.splice(id, 1);
//     }
//     localStorage.setItem('basket',JSON.stringify(basket));
//     location.reload();
// }



// for (let l = 0; l < basket.length; l++) {
//     let buttonSupp = document.querySelector(".supp-un");
//     buttonSupp.addEventListener('click', () => {
//         basket.splice(l, 1);
//         localStorage.setItem('basket',JSON.stringify(basket));
//         location.reload();

//     }) 
// }


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
        } 

    let  lastName = document.querySelector(".prénom").value;
        if(!nameRegex.test(lastName)){        
            alert("Veuillez remplir correctement les champs.")        
        } 


    let  city = document.querySelector(".ville").value;
        if(!nameRegex.test(city)){        
            alert("Veuillez remplir correctement les champs.")        
        } 

    let  email = document.querySelector(".mail").value;
    let  emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if(!emailRegex.test(email)){        
        alert("Veuillez remplir correctement les champs.")        
    }

    let addressRegex = /^[a-zA-Zà-żÀ-Ż-0-9+\s+-]+$/;
    let address = document.querySelector(".adresse").value;
    if(!addressRegex.test(address)){        
        alert("Veuillez remplir correctement les champs.")        
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
    console.log(response);
});




