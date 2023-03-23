const Component1=(props)=>{
  return (
      <div className='component'>
          <h3>Component1</h3>
          <p><span>Name:{props.name}</span></p>
          <p><span>Phone:{props.phone}</span></p>
      </div>
  );
}

class Component2 extends React.Component{
  render(){
      return (
          <div className='component'>
            <h3>Component2</h3>
              <p><span>Name:{this.props.name}</span></p>
              <p><span>phone:{this.props.phone}</span></p>
          </div>
      );
  }
}

class App extends React.Component{
  render(){
      return (
          <div className='appcls'>
              <Component1  name='Pranav' phone='7654234567' />
              <Component1  name='Krishnapriya' phone='7654234567' />
              <Component1  name='Gopika' phone='7654234567' />
              <Component2 name='Sreekanth' phone='1245678289' />
          </div>
      );
  }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

  