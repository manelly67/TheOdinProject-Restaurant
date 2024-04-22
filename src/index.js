import _ from 'lodash';
import './style.css';
import loadHome from './function1.js';
import loadMenu from './function2.js';
import loadContact from './function3.js';
import clearContainers from './clearContainers.js';

function component() {
    const saludo = 'welcome to';
    const name = 'the restaurant';
    const textoIntro ='this is the proof text of a web page for a restaurant as part of a study project,this is the proof text of a web page for a restaurant as part of a study project,this is the proof text of a web page for a restaurant as part of a study project';
    
    const element = document.createElement('div');
    const header = document.createElement('div');
    const nav = document.createElement('div');
    const introduction = document.createElement('div');
 
    const content = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');
    const introBox = document.createElement('div');

    element.classList.add('container');
    header.classList.add('header');
    nav.classList.add('nav');
    content.classList.add('content');
    home.classList.add('btn');
    menu.classList.add('btn');
    contact.classList.add('btn');
    introduction.classList.add('intro');
    introduction.setAttribute('id','showinfo');
    introBox.classList.add('introBox');


    header.innerHTML = _.join([saludo,' ',name], ' ');
    
    home.textContent = "HOME";
    home.addEventListener("click", clearContainers);
    home.addEventListener("click", loadHome);


    menu.textContent = "MENU";
    menu.addEventListener("click", clearContainers);
    menu.addEventListener("click", loadMenu);


    contact.textContent = "CONTACT";
    contact.addEventListener('click',clearContainers);
    contact.addEventListener('click',loadContact);


    introBox.innerHTML =_.join([textoIntro], ' ');
    
    
    element.appendChild(header);
    element.appendChild(nav);
    element.appendChild(introduction);
    
    nav.appendChild(content); 
    
    content.appendChild(home);
    content.appendChild(menu);
    content.appendChild(contact);

    introduction.appendChild(introBox);
    

    return element;
    
  }
  
document.body.appendChild(component());

