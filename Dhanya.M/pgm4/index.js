// Javascript objects
  /*  {
            name :'steve'
            age  : 32;
            drive: function(){

            }
        } */
        const Weather = (props) => {
            //Call backend through Fetch API
            return(
                <div className = 'ui segment'>
                    <h3 onClick ={()=> props.xyz('Data from Component1')}>Weather Component</h3>
                    <h4>Hello{props.user?.name}!</h4>
                </div>
            ) ;
        };
//Class Component
class News extends React.Component{

    //state = (model:null);

    state = {title: null,body: null};

    getModelCallback = (model) => {
        
        console.log('Success :  ');
        console.log(model.data);
       // this.setstate({model: model.data});

    }
    getErrorCallback = (error) =>  {
        console.log('Error :  ');
        console.log(error.message);
       // this.setstate({model: model.data});

    }
    
   
    //call backend through Fetch API
    getModel = () => {
        axios.get('https://jsonplaceholder.typicode.com/post.ss/1')
              .then(this.getModelCallback)
              .catch(this.getErrorCallback)
    }

    render() {
        this.getModel()
        return(
            <div className ='ui segment'>
                <h2>{this.state.title}</h2>
                <p> {this.state.body}</p>
            </div>
        );
    }
  
}
//Class Component
class News extends React.Component{
         state = { title:'',desc:'',error:null};


    //call backend through Fetch API
    //state = {'title':'White house latest news','body':'White house calls on Pence....'}
    //  getNews =() =>{
    //    fetch('https://jsonplaceholder.typicode.com/posts/1').then(Response => Response.json()).then(json=>console.log(json))
    //}
    render(){
        //this.getNews();
        return(
            <div className='ui segment'>
                <h3 onClick ={()=> this.props.xyz('Data from Comment2')}> News Component</h3>
                <h4> Hello{this.props.user?.name} </h4>
                 <br/>
                     <div class ='ui raised segment'>
                         <h2> {this.state.title} </h2>
                        <p> {this.state.body} </p>
                    </div>
            </div>
         );
    }
}
class App extends React.Component{
    //user = null;
    //call backend through Fetch API
    state = {name: 'steve',age: 23};
    
        someMethod (param){
            console.log ('App Function is called !:',param);
        }

        render(){
            return(
                <div> 
                    <h2> App Component </h2>
                    <h4> {this.state.name} </h4>
                    {/* <Weather user = {this.state}xyz = {this.someMethod}/> */  }
                    <News user = {this.state}xyz = {this.someMethod}/>
                </div>
            );
        }
}
//Get reference to the container(Calling web API directly!!!!)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);