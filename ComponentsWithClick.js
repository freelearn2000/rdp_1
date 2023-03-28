//FUNCTIONAL COMPONENT
function Person(props) {
  return (
    <div>
      <h1>Hi I am {props.name}</h1>
    </div>
  );
}

// CLASS COMPONENT WITH BUTTON CLICK

class World extends React.Component {
  render() {
    return (
      <div>
        <h1>I am years old {this.props.age} !!</h1>
        <button onClick={button}>Click Here</button>
      </div>
    );
  }
}

//FUNCTION FOR THE BUTTON CLICK

function button() {
  console.log("You clicked it!");
}

// MAIN COMPONENT
class News extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello World , say hello!!</h1>
        <Person name="Steve" />
        <World age="100" />
        <Person name="Andrew" />
        <World age="5" />
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<News />);
