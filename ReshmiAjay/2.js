const Component1  = ( props ) => {
    return (
        <div className='Component'>
            <h3>Functional Component1</h3>
            <h4>Name : {props.name}</h4>
            <h4>Age : {props.age}</h4>
            <span>
                <i>MODEL</i>
            </span>
        </div>
    );
};

class Component2 extends React.Component {
    render( ){
        return (
            <div className='Component'>
                <h3>Class Component2</h3>
                <h4>Name : {this.props.name1}</h4>
            <h4>Age : {this.props.age1}</h4>
                <span>
                    <i>MODEL</i>
              </span>
            </div>
        );
    }
}

class App extends React.Component {
    name = 'Steve';
    age=23;
    name1 = 'Mike';
    age1=32;
        render ( ) {
        return (
<div>
    <h2>App Component</h2>
    <Component1 name={this.name} age={this.age} ></Component1>
    <Component2 name1={this.name1} age1={this.age1} ></Component2>

</div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);n