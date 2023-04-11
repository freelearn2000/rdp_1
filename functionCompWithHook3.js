//FUNCTION COMPONENT use REACTHOOKS for state management

const Weather = (props) => {
  const [weather, setWeather] = React.useState({ temp: 22 });
  const [info, setInfo] = React.useState("CooL Weather!");

  //Inorder to use flags(we use useRef) so that these useEffects are rendered only when required we are setting conditions
  const firstRun = React.useRef(true);
  const inputTextRef = React.useRef(null);
  React.useEffect(() => {
    console.log("Function componentDidMount");
  }, []);

  React.useEffect(() => {
    //going to write a condition so that it is run only one time
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    console.log("Function componentDidUpdate");
  }, [weather, info]);
  React.useEffect(() => {
    //clean up code
    console.log("componentDidUnmount");
  });

  // Function for the onclick
  const getWeatherCallBack = (event) => {
    console.log(`Current Temperature :`, weather);
    console.log(`Current Info:`, info);
    setWeather({ temp: 45 });
    setInfo("Its Hot!!");

    //FOCUS TO INPUT TEXT
    inputTextRef.current.focus();
  };
  return (
    //passing the temp and info
    <div>
      <h1>Weather</h1>

      <h2>Current Temp {weather.temp}</h2>
      <h2>Note: {info}</h2>

      <div className="ui form">
        <div className="field">
          <input type="text" ref={inputTextRef} />
        </div>
      </div>
      <button className="positive ui button" onClick={getWeatherCallBack}>
        Get Weather
      </button>
    </div>
  );
};

//MAIN APP COMPONENT (CLASS)

class App extends React.Component {
  render() {
    return (
      <div className="ui segment">
        {console.log("Hello from class app")}
        <h1>App Component</h1>
        <Weather />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
