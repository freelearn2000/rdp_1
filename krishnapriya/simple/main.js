
// functional component
const Component1=()=>{
	return (
		<div className='Main2'>
			functional component
		</div>
	)
}

//class component
class Component2 extends React.Component{
	render(){
		return(
			<div className='Main3'>class component</div>
		)
	}
}

//Multiple components
class App extends React.Component{
	render(){
		return(
			<div className=''>
				<Component1/>
				<Component2/>
			</div>
		)
	}
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);