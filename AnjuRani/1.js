// Create a new DIV Object
const newvalue = document.createElement('div');
newvalue.textContent = 'Hello Wold....';
newvalue.classList.add('Main');

// Get reference to root DIV
const rootvalue = document.getElementById('root');

// Attach the new DIV to root DIV
rootvalue.appendChild(newvalue);
