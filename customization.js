console.log(window.location);
const url_string = window.location.href;
const url = new URL(url_string);
const id = url.searchParams.get("id");
console.log(id);

fetch(url)
.then(res => res.json())
.then(function(value){
    recover(value);
}); 
const recover = (elements) => {
    elements.forEach(element => {
        console.log(element);
    });
}