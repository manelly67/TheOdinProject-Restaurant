export default function clearContainers() {

/* limpia el contenido anterior */
    let contentInfo = document.getElementById('showinfo');
    contentInfo.remove();
/* crea un nuevo container */
    const element = document.querySelector('.container');
    const introduction = document.createElement('div');
  
    introduction.classList.add('intro');
    introduction.setAttribute('id','showinfo');
  

    element.appendChild(introduction);
   
}