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
        <div className='app'>
            <Menu />
        </div>
    );
};
const Footer=() =>
{
    return(
        <h5 class="ui header">
  <div class="sub header">Developed for Test</div>
</h5>
        
    );
};
const Title=()=>
{
    return(
        <div className='app'>
            <h1>React Training</h1>
        </div>
    );
};
const HomeComponent=() =>
{
   
};
const Component1  = ( props ) => {
    return (
        <div className='Component'>
            <h3 className='h3c' onClick={()=> props.xyz ('Hello')}>Functional Component1</h3>
            <h4>Name : {props.name}</h4>
            <h4>Age : {props.age}</h4>
            
        </div>
    );
};

class App extends React.Component {
    
    render ( ) {
        return(
            <div className='app'>
                
                <Menu/>
                <HomeComponent name='Steve' age="23" />
                <Footer/>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);