//FUNCTION COMPONENT use REACTHOOKS for state management

const Weather = (props) => {
  const [weather, setWeather] = React.useState({ temp: 22 });
  const [info, setInfo] = React.useState("CooL Weather!");

  //UseEffect is used for all (componentDidMount,componentDidUpdate,componentDidUnmount)
  React.useEffect(() => {
    console.log("Function componentDidMount");
  }, []);

  React.useEffect(() => {
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
  };
  return (
    <div>
      <h1>Weather</h1>
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
