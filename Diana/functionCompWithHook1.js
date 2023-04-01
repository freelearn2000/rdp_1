//FUNCTION COMPONENT use REACTHOOKS for state management

const Weather = (props) => {
  const [weather, setWeather] = React.useState({ temp: 22 });
  const [info, setInfo] = React.useState("CooL Weather!");
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
        <h1>App Component</h1>
        <Weather />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
