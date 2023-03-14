//functional component
const App=()=>{
	return React.createElement('div',{className:'Main'},'Hello World');
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);