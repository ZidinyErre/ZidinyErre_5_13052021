
let notrePanierJSON = Object.keys(localStorage);
console.log(notrePanierJSON);
for (let i = 0; i < notrePanierJSON.length; i++) {
    const appareil = JSON.parse(localStorage.getItem(notrePanierJSON[i]));
    
    const divDeBase = document.querySelector(".data");

    let imgPhoto = document.createElement("img");
    imgPhoto.classList.add("photo");
    let pic = imgPhoto.setAttribute('src',appareil.img);
    imgPhoto.innerHTML = pic;
    divDeBase.appendChild(imgPhoto);

}
