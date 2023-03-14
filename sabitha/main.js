const H3main = (props) => {
  return (
      <h3>Main Component Sabi</h3>
  );
};


const Component1 = (props) => {
  return (
      <div className='component1 alert alert-warning'>
          <h3 onClick={() => props.checkMe('Component 1')}> Functional Component</h3>
          <div> District: {props.district} </div>
      </div>
  );
};

class Component2 extends React.Component {
  render () {
      return (
          <div className='component2'>
              <h3 onClick={() => this.props.checkMe('Component 2')}> Class Component</h3>
              <div> District: {this.props.district} </div>
          </div>
      );
  };
};
class Form2 extends React.Component {
  

  render () {
      return (
          <div className='form2'>
             <div><div><label>Name</label><input type="text" name="dist"></input></div>
             </div>

          </div>
      );
  };
};
class MainComponent extends React.Component {
  district = 'Kollam';
  district2="Thiruvanathapuram"

  getAlertMethod (param) {
      console.log('This function is called by the child component.',param)
  }

  render () {
      return (
          <div className='maincomponent'>
              <H3main />
              <Component1 district={this.district2} checkMe={this.getAlertMethod} />
              <Component2 district={this.district} checkMe={this.getAlertMethod} />
              <form2 />
          </div>
      );
  };
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainComponent/>)
