//Reactjs
//functional component(arrow function)
/*const App=( )=>{
    return React.createElement('div',{className:'Main'},'Hello React World!');
}*/


//USE OF JSX INSTEAD OF MULTIPLE CREATEELEMENT FUBCTION FOR CREATING CHID COMPONENT

/*const App=( )=>{
    return (
        <div className='Main'>
            HELLO JSX WORLD!!!

        </div>
    );
}*/

//CLASS COMPONENT

class App1 extends React.Component{
    render(){
        return (
            <div className='Main'>
                HELLO JSX WORLD with  class component!!!
    
            </div>
        );
    }

}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App1/>);