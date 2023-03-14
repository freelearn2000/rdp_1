//Reactjs
//functional component(arrow function)
/*const App=( )=>{
    return React.createElement('div',{className:'Main'},'Hello React World!');
}*/


//USE OF JSX INSTEAD OF MULTIPLE CREATEELEMENT FUBCTION FOR CREATING CHID COMPONENT

const App=( )=>{
    return (
        <div className='Main'>
            
            HELLO JSX WORLD!!!

        </div>
    );
}

//if multiple div declare inside this tag <>......</> 
//example
const App1=( )=>{
    return (
        <>
        <div className='Main'>
            HELLO JSX WORLD!!!

        </div>
        <div>
            BYE
        </div>

        </>
    );
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App1/>);