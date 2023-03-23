const Component1=(props)=>{
  return (
      <div className='Main'>
         <h3>Component1</h3>
         <span>Name:{props.name}</span>
         <span>Address:{props.address}</span>
      </div>
  );
}
class Component2 extends React.Component{
  render(){
      return (
          <div className='Main1'>
            <h3>Component2</h3>
         <span>Name:{this.props.name}</span>
         <span>Address:{this.props.address}</span>
  
          </div>
      );
  }

}


class App extends React.Component{
  render(){
      return (
          <div className='appcls'>
              APP COMPONENT  !!!

              <Component1  name='Deepa' address='kowdiar' />
              <Component2 name='Reshma' address='Statue' />
  
          </div>
      );
  }

}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

