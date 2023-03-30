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
            <h3 onClick ={()=> this.props.xy('Hai inside Component2')}>News Component</h3>
         <span>Name:{this.props.name}</span>
         <span>Address:{this.props.address}</span>
  
          </div>
      );
  }

}
class Weather extends React.Component{
  render(){
      return (
          <div className='Main1'>
            <h3 onClick ={()=> this.props.xy('Hai inside Component2')}>Weather Component</h3>
         <span>Name:{this.props.name}</span>
         <span>Address:{this.props.address}</span>
  
          </div>
      );
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
              {/* <Weather  name={this.det.name} address={this.det.address} xy={this.Display} /> */}
  
          </div>
      );
  }

}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

