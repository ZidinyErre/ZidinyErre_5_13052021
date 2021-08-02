let notrePanier = localStorage.getItem("basket");
if (!notrePanier) {
    alert("Le panier est vide")
}
let notrePanierJSON = JSON.parse(notrePanier);
console.log(notrePanierJSON);
