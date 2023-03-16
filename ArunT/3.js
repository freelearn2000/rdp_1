const Header=() =>
{
    return(
        <div className='app'>
            <a class="active item">
    Home
  </a>
  <a class="item">
    About Us
  </a>
  <a class="item">
    Contact 
  </a>
        </div>
    );
};
const Footer=() =>
{
    return(
        <h5 class="ui header">
  H5
  <div class="sub header">Developed for Test</div>
</h5>
        </div>
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
            <h3 className='Component.h3' onClick={()=> props.xyz ('Hello')}>Functional Component1</h3>
            <h4>Name : {props.name}</h4>
            <h4>Age : {props.age}</h4>
            <span>
                <i>MODEL</i>
            </span>
        </div>
    );
};

class App extends React.Component {
    render()
    {
        return(
            <div className='app'>
                <Header/>
                <Title/>
                <Footer/>
            </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);