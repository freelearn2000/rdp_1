//Get Reference to the DIV object

const rootElement = document.getElementById('root');

//Create an element

const newElement         = document.createElement('div');
newElement.textContent   = 'Hello World!';
newElement.classList.add('Main');

//Attach the newly created objects as child to root element

rootElement.appendChild(newElement);
