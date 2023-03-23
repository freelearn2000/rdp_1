const Component1=(props)=>{
  return (
      <div className='Main'>
         <h3 onClick ={()=> this.props.xy('Hai inside Component1')}>Component1</h3>
         <span>Name:{props.name}</span>
         <span>Address:{props.address}</span>
      </div>
  );
}
class Component2 extends React.Component{
  render(){
      return (
          <div className='Main1'>
            <h3 onClick ={()=> this.props.xy('Hai inside Component2')}>Component2</h3>
         <span>Name:{this.det.name}</span>
         <span>Address:{this.det.address}</span>
  
          </div>
      );
  }

}


class App extends React.Component{
  det = {name:'Deepa', address:'kowdiar'}
  Display(params){
    console.log('Display Function called :',params);
  }
  render(){
   
      return (
          <div className='appcls'>
              APP COMPONENT  !!!

              <Component1  name={this.det.name} address={this.det.address} xy={this.Display()} />
              <Component2  name={this.det.name} address={this.det.address} xy={this.Display()} />
  
          </div>
      );
  }

}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

