//functional component
const Component1=( )=>{
    return (
        <div className='Main'>
            HELLO JSX WORLD with functional component  !!!

        </div>
    );
}
class Component2 extends React.Component{
    render(){
        return (
            <div className='Main1'>
                HELLO JSX WORLD with  class component2!!!
    
            </div>
        );
    }

}


class App extends React.Component{
    render(){
        return (
            <div className='appcls'>
                APP COMPONENT  !!!

                <Component1 />
                <Component2 />
    
            </div>
        );
    }

}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);