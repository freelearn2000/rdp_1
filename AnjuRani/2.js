const Component1  = ( props ) => {
    return (
        <div className='Component'>
            <h3 className='Componenth3' onClick={()=> props.xyz ('Hello')}>Functional Component1</h3>
            <h4>Name : {props.name}</h4>
            <h4>Age : {props.age}</h4>
        </div>
    );
};

class Component2 extends React.Component {
    render( ){
        return (
            <div className='Component'>
                <h3 className='Componenth3' onClick ={()=> this.props.xyz('Hai')} >Class Componnent2</h3>
                <h4>Name : {this.props.name}</h4>
                <h4>Age : {this.props.age}</h4>
            </div>
        );
    }
}

class App extends React.Component {
    
    user = {name: 'Steve', age: 23};
//     name = 'Steve';
//     age = 23;
//     name1 = 'MiKe';
//     age1 = 33;
    
    somMethod (param) {
        console.log('App Function called :',param);
    }
    
    render ( ) {
        return (
            <div>
                <h2>App Component</h2>
                <Component1 name={this.user.name} age={this.user.age} xyz={this.somMethod()}></Component1>
//                 <Component2 name={this.user.name} age={this.user.age} xyz={this.somMethod()}></Component2>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
