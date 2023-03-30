//FUNCTIONAL COMPONENT


function Person(props) {
    return (
      <div>
        <h1>Hai I'm {props.name}</h1>
      </div>
    );
  }
  
  // CLASS COMPONENT WITH BUTTON CLICK
  
  class World extends React.Component
   {
     render() {
        return (
          <div>
              <h1>I am  {this.props.age} years old </h1>
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
          <h1> Hello World  !!!!</h1>
          <Person name="Steve" />
          <World age="50" />
          <Person name="Arun Kumar" />
          <World age="45" />
          <Person name="Sreyus Arun" />
          <World age="13" />

        </div>
      );
    }
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<News />);