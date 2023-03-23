const rootElement=document.getElementById('root');
//create element

const newElement=document.createElement('div');
newElement.textContent='Hello World!';
newElement.classList.add('Main');
rootElement.appendChild(newElement);