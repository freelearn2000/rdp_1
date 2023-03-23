
//header class component
class Headerdesign extends React.Component{
	render(){
		return(
            <header className="header">
            <h1 class="textcolor">React demo website</h1>
          </header>
		)
	}
}

//body class component
class Bodydesign extends React.Component{
	render(){
		return(
            <div className="container carddesign">
            <div className="ui link cards">
                <div className="card ">
                    <div className="image">
                    <img src="images/img.png" width="100px" hegiht="100px"/>
                    </div>
                    <div className="content">
                    <div className="header">Krishnapriya</div>
                    {/* <div className="meta">
                        <a>Friends</a>
                    </div> */}
                    <div className="description">
                        She is Learning something about React.
                    </div>
                    </div>
                    <div className="extra content">
                    <span className="right floated">
                        Joined in 2013
                    </span>
                    <span>
                        <i className="user icon"></i>
                        75 Friends
                    </span>
                    </div>
                </div>
            </div>
        </div>    
    );
	}
}
//Multiple components
class App extends React.Component{
	render(){
		return(
			<div className=''>
				<Headerdesign/>
                <Bodydesign/>
			</div>
		)
	}
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);