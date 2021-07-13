const url_datas = window.location.href;
const url2 = new URL(url_datas);
const key = url2.searchParams.get("id");
console.log(url2);

fetch("http://localhost:3000/api/cameras/" + key)
.then(res => res.json())
.then(function(value){
    recover(value);
});

const recover (component) => {
    document.getElementsByClassName("data").innerHTML += `<div class="col"> ${component.imageURL} </div>`;
}
