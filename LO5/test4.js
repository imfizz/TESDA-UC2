alert("hey");

var title = document.getElementById('page-title');

console.log(title.onclick = function(){
    alert("you clicked me");
});

console.log(title.onmouseover = function(){
    alert("you hovered your mouse over me");
});

