const User = function (props) {
  return (
    <div id="user">
      <h1>Hello World I am {props.name}</h1>
      <h2>I am {props.color} in color!!</h2>
      <button onClick={buttonClick}>Click Me!!</button>
    </div>
  );
};

const Real = function () {
  return (
    <>
      <User name="Orange" color="Orange" />
      <User name="Kiwi" color="Green" />
      <User name="Banana" color="Yellow" />
    </>
  );
};

const Click = function () {
  return (
    <>
      <User name="A Fruit" color="Orange" />
      <User name="A Fruit" color="Green" />
      <User name="A Fruit" color="Yellow" />
    </>
  );
};

const buttonClick = function () {
  root.render(<Click />);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Real />);
