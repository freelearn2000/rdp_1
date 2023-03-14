// //functional component
// const App=()=>{
// 	return React.createElement('div',{className:'Main'},'Hello World');
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);

//use of JSX instead of multiple create element functions

//class component
class App extends React.Component{
	render(){
		return(
			<div className='Main'>
				Hello JS World!
			</div>
		)
	}
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);