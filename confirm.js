// Avec la méthode Object.keys on me renvoie ic un tableau du localstorage
let commandeFinale = Object.keys(localStorage);

let divCentrale = document.querySelector(".centre");
// Je parcours à l'aide d'une boucle le tableau
for (let c = 0; c < commandeFinale.length ; c++) {
// Puis je vais parse les éléments car ils étaient sous forme de string donc inutilisable
    let recap = JSON.parse(localStorage.getItem(commandeFinale[c]));

    let merci = document.querySelector(".remerci");
    merci.innerHTML = "Merci pour votre commande et à bientôt";

    let prix = document.querySelector(".price");
    prix.innerHTML = "Le montant  est de  " +  `<span>${recap.prixTotal/100+".00"+"€"}`;

    let id = document.querySelector(".identifiant");
    id.innerHTML = "Voici votre identifiant  " + `<span>${recap.idCommande}</span>` ;



}

localStorage.clear();