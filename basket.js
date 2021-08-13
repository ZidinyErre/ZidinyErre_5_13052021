
let notrePanierJSON = Object.keys(localStorage);
console.log(notrePanierJSON);
for (let i = 0; i < notrePanierJSON.length; i++) {
    const appareil = JSON.parse(localStorage.getItem(notrePanierJSON[i]));
    
    const divDeBase = document.querySelector(".data");

    let title = document.createElement("h3");
    title.classList.add("titre");
    title.innerHTML = appareil.name;
    divDeBase.appendChild(title);

    let imgPhoto = document.createElement("img");
    imgPhoto.classList.add("photo");
    let pic = imgPhoto.setAttribute('src',appareil.img);
    imgPhoto.innerHTML = pic;
    divDeBase.appendChild(imgPhoto);

    let price = document.createElement("p");
    price.classList.add("monnaie");
    price.innerHTML = appareil.prix/100+".00" + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-euro" viewBox="0 0 16 16"><path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"/></svg>';
    divDeBase.appendChild(price);

    let numberOf = document.createElement("p");
    numberOf.classList.add("nombre");
    numberOf.innerHTML = "Quantité:  "  +  appareil.quantity  + " .";
    divDeBase.appendChild(numberOf);

}

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
const contact = {
    firstName : document.querySelector(".nom").value,
    lastName : document.querySelector(".prénom").value,
    address: document.querySelector(".adresse").value,
    city : document.querySelector(".ville").value,
    email : document.querySelector(".mail").value
}

function nom() {
    let name = contact.firstName;
    let nameRegex = /^[A-Za-z]{3,20}$/ ;
    let nameResult = nameRegex.test(name);

    let envoie = document.querySelector(".btn-dark");
    envoie.addEventListener("click", function(){
        if (nameResult == true) {
            alert("let'sgo");
        }
        else{
            alert("nope");
        }
    });
}

console.log(envoie);

