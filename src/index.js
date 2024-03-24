import './style.css';
const newUl = document.createElement('ul');
const newLi = document.createElement('li');
const div = document.getElementById('content');
const img = document.createElement('img');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');
const createhomeDiv = document.createElement('div');
const createmenuDiv = document.createElement('div');
const createcontactDiv = document.createElement('div');
const newDiv = document.createElement('div');



console.log('test');
createhomeDiv.className='home-div';
div.appendChild(createhomeDiv);
const homeDiv = document.querySelector('.home-div');
img.src='https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_960_720.jpg';
h1.textContent='Welcome to our Restaurant Webpage';
p.textContent='Our restaurant aims to serve you the best and unique food that you\n would ever taste in your entire life, so what are you waiting for dont\n waste the chance of consuming food in our wonderful place';
homeDiv.appendChild(img);
homeDiv.appendChild(h1);
homeDiv.appendChild(p);

homeButton.addEventListener('click',()=>{
    if(div.contains(createcontactDiv)){
               div.removeChild(createcontactDiv);
              }
    else if(div.contains(createmenuDiv)){
        div.removeChild(createmenuDiv);
       }
       
    img.src='https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_960_720.jpg';
    h1.textContent='Welcome to our Restaurant Webpage';
    p.textContent='Our restaurant aims to serve you the best and unique food that you\n would ever taste in your entire life, so what are you waiting for dont\n waste the chance of consuming food in our wonderful place';
    createhomeDiv.className='home-div';
    div.appendChild(createhomeDiv);
    console.log('home button clicked');
})

menuButton.addEventListener('click',()=>{
    if(div.contains(createhomeDiv)){
        div.removeChild(createhomeDiv);
       }
else if(div.contains(createcontactDiv)){
 div.removeChild(createcontactDiv);
}

    
   
    createmenuDiv.className='menu-div';
    div.appendChild(createmenuDiv);
    const menuDiv = document.querySelector('.menu-div');
   // console.log(createmenuDiv.classList.contains('menu-div'));
    h1.textContent="menu button pressed";
    menuDiv.appendChild(h1);
    console.log('menu button clicked');
    
})
contactButton.addEventListener('click',()=>{
    if(div.contains(createhomeDiv)){
        div.removeChild(createhomeDiv);
       }
else if(div.contains(createmenuDiv)){
 div.removeChild(createmenuDiv);
}
    createcontactDiv.className='contact-div';
    div.appendChild(createcontactDiv);
    const contactDiv = document.querySelector('.contact-div');
    h1.textContent="contact button pressed";
    contactDiv.appendChild(h1);
    console.log('menu button clicked');
    console.log('contact button clicked');
})