const Menu = ( ) => {
    return (
        <div class="headerui">
            <a>Home</a>
            <a class="item">About Us</a>
            <a>Contact Us</a>
        </div>
    );
};

const Header = ( ) => {
    return (
        <div className='App'>
            <Menu />
        </div>
    );
};

const Footer = ( ) =>
{
    return (
        <div className='App'>
            <span>Copyright 2023 © Xenia Technologies All Rights reserved</span>
        </div>
    );
};

const Title = ( ) =>
{
    return (
        <div className='App'>
            <h1>React Training</h1>
        </div>
    );
};

const HomeContent = ( props ) => {
    return (
        <div className='Component'>
            <Title />
            <h3 className='Componenth3' onClick={()=> props.xyz ('Hello')}>Functional Component1</h3>
            <h4>Name : {props.name}</h4>
            <h4>Age : {props.age}</h4>
        </div>
    );
};

class App extends React.Component {
    
    render ( ) {
        return(
            <div className='App'>
                <Header/>
                <HomeContent name='Steve' age=23 />
                <Footer/>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
