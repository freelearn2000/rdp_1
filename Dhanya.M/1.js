//Get Reference to the DIV object

const rootvalue = document.getElementById('root');

//Create an element

const newvalue         = document.createElement('div');
newvalue.textContent   = 'Hai Hello World!';
newvalue.classList.add('Main');

//Attach the newly created objects as child to root element

rootvalue.appendChild(newvalue);
