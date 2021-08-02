let notrePanier = localStorage.getItem("basket");
if (!notrePanier) {
    alert("Le panier est vide")
}
let notrePanierJSON = JSON.parse(notrePanier);
console.log(notrePanierJSON);

for (let i = 0; i < notrePanierJSON.length; i++) {
    const element = notrePanierJSON[i];
    
    const divDeBase = document.querySelector(".data");

    let imgPhoto = document.createElement("img");
    imgPhoto.classList.add("photo");
    let pic = imgPhoto.setAttribute('src',element.img);
    imgPhoto.innerHTML = pic;
    divDeBase.appendChild(imgPhoto);
    console.log(e);

}
