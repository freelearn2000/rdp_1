const rootElement = document.getElementById('root');

const newElement = document.createElement('div');
newElement.textContent='Hello!';
newElement.classList.add('Main');
rootElement.appendChild(newElement);