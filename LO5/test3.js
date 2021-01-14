var parent = document.getElementById('main-nav').getElementsByTagName('ul')[0];

console.log(parent);

var child = parent.getElementsByTagName('li')[0];
console.log(child);

parent.removeChild(child);

var removed = parent.removeChild(child);

console.log(parent.appendChild(removed));