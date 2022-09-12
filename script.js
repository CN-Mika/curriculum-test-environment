let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let imagePlaceholder = document.querySelector(".image");


button1.onclick = function() {
  imagePlaceholder.src = "/images/giraffe.jpeg";
  imagePlaceholder.style.display = "none"
}

button2.onclick = function() {
  imagePlaceholder.src = "images/fox.jpeg";
}

if (2 > 1){
  imagePlaceholder.style.display = "none"
} 

if (button1 === "rainy") {
  alert("An umbrella");
} else if(input === "snowy") {
4     alert("A coat");
5 } else {
6     alert("A smile");
7 }


let fruits = [“peach”, “apple”, “lemon”];

for (let i = 0; i < fruits.length; i++) {
body.insertAdjacentHTML(“beforeend”, `Yummmmmmm, ${fruits[i]}!`)
} 
