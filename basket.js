let basket = [];
if ( !(typeof localStorage.getItem("basket") == 'string' && !localStorage.getItem("basket").trim() || typeof localStorage.getItem("basket") == 'undefined' || localStorage.getItem("basket") === null)) {
    basket = JSON.parse(localStorage.getItem("basket"));
}
for (let i = 0; i < basket.length; i++) {

    

    document.querySelector(".base_basket").innerHTML +=
   ` <tr>
        <td class="imgtableau2"><img class="imgtableau" src='  ${basket[i].img}  '></td>
        <td>${basket[i].name}</td>
        <td>${basket[i].prix/100+".00"+"€"}</td>
        <td>${basket[i].quantity}</td>
        <td><button class="supp-un">Supprimer</button></td>
    </tr>
    `
    
    
}

 let totalPrixPanier = [] ;
 for (let j = 0; j < basket.length; j++) {
    let prixPanier = basket[j].prix * basket[j].quantity;
    totalPrixPanier.push(prixPanier);

}
const reducer = (accumulator,currentValue) => accumulator + currentValue;
const calculPrix = totalPrixPanier.reduce(reducer);
const divTotal = document.querySelector(".total");
divTotal.innerHTML = `<div>
Le Prix de vos achats est de ${calculPrix/100 + " .00" + "€"}
</div>`;

for (let l = 0; l < basket.length; l++) {
    let buttonSupp = document.querySelector(".supp-un");
    buttonSupp.addEventListener('click', () => {
        basket.splice(l, 1);
        localStorage.setItem('basket',JSON.stringify(basket));
        location.reload();

    }) 
}



let vider = document.querySelector(".supprimer");
    vider.addEventListener('click', () => {
        localStorage.removeItem("basket");
        location.reload();
    })
// //  let totalPanier = "" ;
// const divTotal = document.querySelector(".totalpanier");
// let calculPanier = basket.prix/100 * basket.quantity +".00"+ " €" ;
// console.log(calculPanier);
// divTotal.innerHTML = calculPanier;


    

// let notrePanierJSON = Object.keys(localStorage);
// console.log(notrePanierJSON);
// for (let i = 0; i < notrePanierJSON.length; i++) {
//     const appareil = JSON.parse(localStorage.getItem(notrePanierJSON[i]));
    
//     let title = document.querySelector(".titre");
//     title.innerHTML = appareil.name;

//     let imgPhoto = document.querySelector(".img");
//     let pic = imgPhoto.setAttribute('src',appareil.img);
//     imgPhoto.innerHTML = pic;

//     let price = document.querySelector(".prix");
//     price.innerHTML = appareil.prix/100+".00" + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-euro" viewBox="0 0 16 16"><path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"/></svg>';

//     let numberOf = document.querySelector(".nombre");
//     numberOf.innerHTML = "Quantité:  "  +  appareil.quantity  + " .";
// }

// FORMULAIRE
// class contact {
//     constructor(firstName, lastName, address, city , email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.address = address;
//         this.city = city;
//         this.email = email;
//     }
// }
// const contact = {
//     firstName : document.querySelector(".nom").value,
//     lastName : document.querySelector(".prénom").value,
//     address: document.querySelector(".adresse").value,
//     city : document.querySelector(".ville").value,
//     email : document.querySelector(".mail").value
// }

    

let envoie = document.querySelector(".valid");
envoie.addEventListener('click', function(){
    
let firstName = document.querySelector(".nom").value;
let nameRegex = /^[A-Za-z]{3,20}$/;
    if(nameRegex.test(firstName)){        
        console.log("ok");
    } else{
        console.log("ko");
    }

let  lastName = document.querySelector(".prénom").value;
    if(nameRegex.test(lastName)){        
        console.log("yep");
    } else{
        console.log("nop");
    }


let  city = document.querySelector(".ville").value;
    if(nameRegex.test(city)){        
        console.log("yes");
    } else{
        console.log("no");
    }

let  email = document.querySelector(".mail").value;
let  emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
if(emailRegex.test(email)){        
    console.log("ope");
}else{
    console.log("nope");
}

let addressRegex = /^[a-zA-Zà-żÀ-Ż-0-9+\s+-]+$/;
let address = document.querySelector(".adresse").value;
if(addressRegex.test(address)){        
    console.log("ça marche ");
}else{
    console.log("nonn");
}


});




