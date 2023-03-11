class World extends React.Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h2>Hi This is {this.props.name}</h2>
        <button onClick={clickMe}>Click Me!!</button>
      </div>
    );
  }
}
const clickMe = function () {
  root.render(<Button />);
};
class Button extends React.Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h2>I am not Steve Jobs!!</h2>
      </div>
    );
  }
}

class ThisWorld extends React.Component {
  render() {
    return (
      <div id="thisworld">
        <World name="Steve" />
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ThisWorld />);
