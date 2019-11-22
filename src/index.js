import React,{Component} from 'react';

import ReactDOM from 'react-dom';
import SeasonDisplay  from './SeaonDisplay'

class App extends Component
{

  state = { lat:null , err:null}
   //  constructor(props)
 // {
   // super(props);

  //  this.state =
    //{

    //  lat:null,
     // err:null

  //  }
    
  
  
  

  conditionalRender = ()=> {
    if(this.state.err)return<div>Error:{this.state.err}</div>
  else if(this.state.lat)return<div><SeasonDisplay  latOfMyPosition={this.state.lat}/></div>
   else return <div>Loading............</div>
  }
  componentDidMount = ()=>
  {
    window.navigator.geolocation.getCurrentPosition(

      (position)=>{
        
        this.setState({lat:position.coords.latitude})
      },
      (error)=>{

        this.setState({err:error.message})
      }
    );
  }
  componentDidUpdate = ()=>
  {
    console.log("Component has Re rendered ")
  }

render()
{

  return(
  
    <div>
      {this.conditionalRender()}
    </div>
  )
  
  /*return(
    <div>

     latitude:{this.state.lat}<br/>
     Error:{this.state.err}
      {<SeasonDisplay />}
    </div>
  )*/
  }
}


  


ReactDOM.render(<App />, document.querySelector("#root"))
