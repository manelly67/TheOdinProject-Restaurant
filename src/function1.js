export default function loadHome() {
    
    const homeContent = document.querySelector('.intro');
    const homeBox = document.createElement('div');
    
    let home1 = 'international fine cuisine';
    let home2 = 'our dishes are prepared with ingredients from local producers';

    homeBox.classList.add('introBox');
    homeBox.classList.add('contactTex');
    
    homeBox.innerHTML = _.join([home1,'',home2], ' ');

    homeContent.appendChild(homeBox);
   
   
   
    console.log('prueba1');
  }