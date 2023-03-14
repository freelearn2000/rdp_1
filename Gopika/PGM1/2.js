//Reactjs
//functional component(arrow function)
const App=( )=>{
    return React.createElement('div',{className:'Main'},'Hello React World!');
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);