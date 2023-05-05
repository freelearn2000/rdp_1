//Context
const UserContext = React.createContext();
class App extends React.Component {
  render() {
    return (
      <UserContext.Provider value={`Steve`}>
        <div class="ui segment">
          <h2>App Component</h2>
          <Child />
          <Child1 />
          <Child2 />
        </div>
      </UserContext.Provider>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {(value) => (
          <div className="ui segment">
            <h4>Child Component</h4>
            <h4>Context Value : {value}</h4>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

//Another way of doing (consuming the context) came in later version
class Child1 extends React.Component {
  static contextType = UserContext;
  render() {
    return (
      <div className="ui segment">
        <h3>Child component 1</h3>
        <h4>Context value : {this.context}</h4>
      </div>
    );
  }
}
// for functional component

const Child2 = (props) => {
  //using hook
  const user = React.useContext(UserContext);
  return (
    <div className="ui segment">
      <h3>Child component 2</h3>
      <h4>Context value : {user}</h4>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
