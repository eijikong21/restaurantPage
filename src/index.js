const div = document.getElementById('content');
const img = document.createElement('img');
const h1 = document.createElement('h1');
const p = document.createElement('p');
console.log('test');

img.src='https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_960_720.jpg';
h1.textContent='Welcome to our Restaurant Webpage';
p.textContent='Our restaurant aims to serve you the best and unique food that you would ever taste in your entire life, so what are you waiting for dont waste the chance of consuming food in our wonderful place';
div.appendChild(img);
div.appendChild(h1);
div.appendChild(p);