export default function loadContact() {
   
    const contactContent = document.querySelector('.intro');
    const contactBox = document.createElement('div');
    
    let contacto = 'we are located on the street *** intersection with avenue ****';
    let pedidos = 'for orders call this number 123456789';

    contactBox.classList.add('introBox');
    contactBox.classList.add('contactTex');
    
    contactBox.innerHTML = _.join([contacto,'',pedidos], ' ');

    contactContent.appendChild(contactBox);
   
   
   
    console.log('prueba3');
  }