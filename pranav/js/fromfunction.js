const Component1 = (props) => {
    return (
        <div className='component'>
            <h3 onClick={()=> props.xyz()}>Functional Component</h3>
            <p>Name : {props.name}</p>
            <p>Phone : {props.phone}</p>
        </div>
    );
};

class Component2 extends React.Component {
    render() {
        return (
            <div className='component'>
                <h3>Class Componnent</h3>
                <p>Name : {this.props.name}</p>
                <p>Phone : {this.props.phone}</p>
            </div>
        );
    }
}

class App extends React.Component {
    user = { name: 'Pranav', phone: 8735627878 }
    somMethod() {
        console.log('App Function called :');
    }

    render() {
        return (
            <div>
                <Component1 name={this.user.name} phone={this.user.phone} xyz={this.somMethod()}></Component1>
                <Component2 name={this.user.name} phone={this.user.phone} xyz={this.somMethod()}></Component2>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
