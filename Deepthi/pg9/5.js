const Component1=(props)=>{
  return (
      <div className='Main'>
         <h3 onClick ={()=>props.xy('Hai inside Component1')}>Component1</h3>
         <span>Name:{props.name}</span>
         <span>Address:{props.address}</span>
      </div>
  );
}
//fetch function
class News extends React.Component{
  reports={title:'',body:'',error:null};

  getNewsreport=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=>response.json())
    .then(json => console.log(json))

  }
  render(){
    this.getNewsreport();
   
      return (
          <div className='Main1'>
            <h3 >News Component</h3>
         <span>Name:{this.getNewsreport.title}</span>
         <span>Address:{this.getNewsreport.body}</span>
  
          </div>
      );
  }

}
//axios 
class Weather extends React.Component{
  state = { title: "", body: "" };

  getModelCallback = (model) => {
    console.log("Success : ");
    console.log(model.data);
    this.state.title = model.data.title;
    this.state.body = model.data.body;
    this.setState({ title: this.state.title, body: this.state.body });
  };

  getErrorCallback = (error) => {
    console.log("Error : ");
    console.log(error.message);
  };


  render(){
      return (
          <div className='Main'>
            <h3>Weather Component</h3>
         <p><b>Title:</b>{this.state.title}</p>
         <p><b>Body:</b>{this.state.body}</p>
  
          </div>
      );
  }
//componentDidMount() only call after render method
  componentDidMount() {
       axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(this.getModelCallback)
      .catch(this.getErrorCallback);
    console.log("component Did Mount");
  }

}


class App extends React.Component{
  det = {name:'Deepa', address:'kowdiar'}
  Display(params){
    console.log('Display Function called :',params);
  }
  render(){
   
      return (
          <div className='appcls'>
              APP COMPONENT  !!!

              <News  name={this.det.name} address={this.det.address} xy={this.Display} />
              <Weather  name={this.det.name} address={this.det.address} xy={this.Display} />
  
          </div>
      );
  }

}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);