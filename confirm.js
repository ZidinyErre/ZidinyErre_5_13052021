let commandeFinale = Object.keys(localStorage);

let divCentrale = document.querySelector(".centre");

for (let c = 0; c < commandeFinale.length ; c++) {
    let recap = JSON.parse(localStorage.getItem(commandeFinale[c]));

    let merci = document.createElement("h2");
    merci.innerHTML = "Merci pour votre commande et à bientôt";
    divCentrale.appendChild(merci);

    let prix = document.createElement("p");
    prix.classList.add("paragraphe");
    prix.innerHTML = "Le montant de vos achats est de  " +  recap.prixTotal/100+".00"+"€";
    divCentrale.appendChild(prix);

    let id = document.createElement("p");
    id.classList.add("paragraphe");
    id.innerHTML = "Voici vos identifiants  " +  recap.idCommande;
    divCentrale.appendChild(id);



}

localStorage.clear();