const Component1=(props)=>{
    return (
        <div className='Main'>
           <h3 className='fontdesign' onClick ={()=>props.xy('Hai inside Component1')}>Component1</h3>
           <span className='fontdesign'>Name:{props.name}</span><br></br>
           <span className='fontdesign'>Address:{props.address}</span>
        </div>
    );
  }
  class Component2 extends React.Component{
    render(){
        return (
            <div className='Main'>
              <h3 onClick ={()=> this.props.xy('Hai inside Component2')}>Component2</h3>
           <span className="fontdesign">Name:{this.props.name}</span>
           <span>Address:{this.props.address}</span>
    
            </div>
        );
    }
  
  }
  
  
  class App extends React.Component{
    det = {name:'Krishnapriya', address:'Thiruvanathapuram'}
    Display(params){
      console.log('Display Function called :',params);
    }
    render(){
     
        return (
            <div className='cards'>
                Example of React
  
                <Component1  name={this.det.name} address={this.det.address} xy={this.Display} />
                <Component2  name={this.det.name} address={this.det.address} xy={this.Display} />
    
            </div>
        );
    }
  
  }
  const root=ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App/>);