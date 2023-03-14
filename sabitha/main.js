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
class Component3 extends React.Component {
  

  render () {
    return (
        <div className="Component3"><form><div><lable>Name</lable><input type="text"></input></div>
        <div><button>Click Me</button></div>
        </form></div>
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
              <Component3 />
          </div>
      );
  };
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainComponent/>)
