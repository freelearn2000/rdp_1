// //functional component
const Component1=()=>{
	return (
		<div className='Main'>
			Hello
		</div>
	)
}


//class component
class Component2 extends React.Component{
	render(){
		return(
			<div className='Main1'>
				Hello JS World!
			</div>
		)
	}
}

//Multiple components
class App extends React.Component{
	render(){
		return(
			<div className='Main2'>
				<Component1/>
				<Component2/>
			</div>
		)
	}
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);