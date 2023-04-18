/*............HOC Higher Order Component: A function that takes in a component as argument and returns a new component.......*/

// function taking a component as Argument and returning a new component
const doAuthentication = (Component) => {
  //Address Cross-cutting concerns here
  const user = { name: "Steve Jobs" };
  //Return a new component with the injected concern data
  return class extends React.Component {
    render() {
      return <Component user={user} />;
    }
  };
};

// const doLogging = (Component) => {
//   //Address Cross-cutting concerns here
//   //const user = { name: "Steve Jobs" };
//   //Return a new component with the injected concern data
//   return class extends React.Component {
//     render() {
//       return <Component />;
//     }
//   };
// };
const doCaching = (Component) => {
  //Address Cross-cutting concerns here
  //const user = { name: "Steve Jobs" };
  //Return a new component with the injected concern data
  return class extends React.Component {
    render() {
      return <Component user={user} />;
    }
  };
};
class MyComponent extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>My Component</h1>
        <h4>user: {user?.name}</h4>
        <p>Details of component..</p>
      </div>
    );
  }
}
//const EnhancedComponent = doLogging(doAuthentication(MyComponent));
const EnhancedComponent = doAuthentication(MyComponent);
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <EnhancedComponent />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
