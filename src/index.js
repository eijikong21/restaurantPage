import './style.css';
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

let display=false;
let contactDisplay=false;
console.log('test');
createhomeDiv.className='home-div';
div.appendChild(createhomeDiv);
const homeDiv = document.querySelector('.home-div');
img.src='https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_960_720.jpg';
h1.textContent='Welcome to our Restaurant Webpage';
p.textContent='Our restaurant aims to serve you the best and unique food that you\n would ever taste in your entire life, so what are you waiting for dont\n waste the chance of consuming food in our wonderful place.';

homeDiv.appendChild(h1);
homeDiv.appendChild(p);
homeDiv.appendChild(img);
homeButton.addEventListener('click',()=>{
   
    if(div.contains(createcontactDiv)){
               div.removeChild(createcontactDiv);
              }
    else if(div.contains(createmenuDiv)){
        div.removeChild(createmenuDiv);
       }
       
    img.src='https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_960_720.jpg';
    h1.textContent='Welcome to our Restaurant Webpage';
    p.textContent='Our restaurant aims to serve you the best and unique food that you\n would ever taste in your entire life, so what are you waiting for dont\n waste the chance of consuming food in our wonderful place.';
    createhomeDiv.className='home-div';
    div.appendChild(createhomeDiv);
    const homeDiv = document.querySelector('.home-div');
    
    homeDiv.appendChild(h1);
    homeDiv.appendChild(p);
    homeDiv.appendChild(img);
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
    
    if(display==false){
    const menuDiv = document.querySelector('.menu-div');
    const menuHeader = document.createElement('h2');
    menuHeader.textContent="Menu";
    menuDiv.appendChild(menuHeader);
    for (let i = 0; i < 3; i++){
    const newUl = document.createElement('ul');
        menuDiv.appendChild(newUl);
        switch(i){
            case 0: newUl.textContent='Meals'
            break;
            case 1: newUl.textContent='Beverages'
            break;
            case 2: newUl.textContent='Dessert'
            break;  
        }
         for (let j = 0; j < 3; j++) {
            const newLi = document.createElement('li');
            newUl.appendChild(newLi);
        }
    }
    const allLi = menuDiv.querySelectorAll('li');
 
    allLi.forEach((li, index) => {
      
             switch(index){
            case 0: li.textContent='Spaghetti'
            break;
            case 1: li.textContent='Chicken'
            break;
            case 2: li.textContent='Beef Steak'
            break;
            case 3: li.textContent='Coffee'
            break;
            case 4: li.textContent='Milk'
            break;
            case 5: li.textContent='Juice'
            break;
            case 6: li.textContent='Ice cream'
            break;
            case 7: li.textContent='Cake'
            break;
            case 8: li.textContent='Chocolate'
            break;
        }
    });
                            }
                            display=true;
    
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
    if(contactDisplay==false){
    const contactDiv = document.querySelector('.contact-div');
    console.log('contact button clicked');
    const createFieldset = document.createElement('fieldset');
    for (let j = 0; j < 4; j++) {
        const newLi = document.createElement('li');
        createFieldset.appendChild(newLi);
    }
    const link = document.createElement('a');
    const allLi = createFieldset.querySelectorAll('li');
    allLi.forEach((li, index) => {
      
        switch(index){
       case 0: link.href = 'https://www.facebook.com/';
       link.textContent = 'Facebook';
       li.textContent='Social: ';
        li.appendChild(link);
       break;
       case 1: li.textContent='Number: 09XX-XXX-XXXX'
       break;
       case 2: li.textContent='Email: restau@test.com'
       break;
       case 3: li.textContent='Address: this is a test address, enter your address here'
       break;
   }
});
    const createLegend = document.createElement('legend');
    contactDiv.appendChild(createFieldset);
    createLegend.textContent='Contact Us';
    createFieldset.appendChild(createLegend);
}
   contactDisplay=true;
})