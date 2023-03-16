const newvalue = document.createElement('div');
newvalue.textContent='Hello Wold....';
newvalue.classList.add('Main');

const rootvalue = document.getElementById('root');
rootvalue.appendChild(newvalue);
