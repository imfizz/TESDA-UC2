var navLi = document.createElement("li");

console.log(newLi);

var newA = document.createElement("a");

console.log(newA);

var menu = document.getElementById("main-nav").getElementsByTagName("ul");

console.log(menu);

console.log(menu.appendChild(newLi));
console.log(newLi.appendChild(newA));

newA.innerHTML = "Blog";

console.log(menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]));