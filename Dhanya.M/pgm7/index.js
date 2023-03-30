const Weather = (props) => {
  return (
    <div className="ui segment">
      <h2>Hello.props.user?.name</h2>
    </div>
  );
};
class News extends React.Component {
  state = { title: "", body: "" };

  getModelCallback = (model) => {
    console.log("Success : ");
    console.log(model.data);
    this.state.title = model.data.title;
    this.state.body = model.data.body;
    this.setState({ title: this.state.title, body: this.state.body });
  };

  getErrorCallback = (error) => {
    console.log("Error : ");
    console.log(error.message);
  };

  //   getModel = () => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts/1")
  //       .then(this.getModelCallback)
  //       .catch(this.getErrorCallback);
  //   };

  render() {
    //this.getModel();     DONT CALL THIS WAY
    console.log("render"); //To see the sequence of firing: render comes first and then COMPONENTDIDMOUNT
    return (
      <div className="ui segment">
        <h2>{this.state.title}</h2>
        <p>{this.state.body}</p>
      </div>
    );
  }
  componentDidMount() {
    //this.getModel();      INSTEAD OF WRITING THE FUNCTION SEPARATELY AND CALLING IT DIRECTLY WROTE THE FUNCTION
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(this.getModelCallback)
      .catch(this.getErrorCallback);
    console.log("component Did Mount");
  }
}

class App extends React.Component {
  state = { name: "Steve", age: "" };
  render() {
    return (
      <div>
        <h2>App Component</h2>
        <h4>{this.state.name}</h4>
        <News user={this.state} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);