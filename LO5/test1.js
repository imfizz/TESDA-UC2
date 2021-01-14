var title = document.getElementById('page-title');
console.log(title.setAttribute('style', 'position: relative;'));

console.log(title.setAttribute('style', 'left: 10px;'));
console.log(title.setAttribute('style', 'position: relative; left: 10px;'));

console.log(title.style.left = "20px");
console.log(title.style.top = '10px');

console.log(title.style.color = 'red');

console.log(title.style.backgroundColor = 'blue');