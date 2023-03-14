// //functional component
// const App=()=>{
// 	return React.createElement('div',{className:'Main'},'Hello World');
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);

//use of JSX instead of multiple create element functions
const App=()=>{
	return (
		<div className='Main'>
		Hello world

		</div>
	)
}

//for multiple div's example
const App1=()=>{
	return (
		<>
		<div className='Main'>
		Hello world

		</div>

		<div >
		Bye

		</div>
		</>
	)
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App1/>);