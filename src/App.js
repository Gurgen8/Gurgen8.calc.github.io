import './App.css';
import { Component } from 'react';
import Key from "./Component/Key"
import Output from './Component/Output';
import _  from "lodash"

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      result:""
    }
  }
 
  buttonPresed=(buttonName)=>{
    if(buttonName==="="){
      this.calc()
    }
    else if(buttonName==="C"){
      this.reset()
    }else if(buttonName==="CE"){
      this.remove()
    }else if(buttonName==="sqrt"){
     this.sqrt()
    }
    else if(buttonName==="sinus"){
      this.sinus()
     }
     else if(buttonName==="cosinus"){
      this.cosinus()
     }
     else if(buttonName==="tanges"){
      this.tanges()
     }
     else{
      this.setState({
        result:this.state.result+buttonName
      })
   
    }
  }
    

  sinus=()=>{
    try{ this.setState({
      result:Math.sin(eval(this.state.result))})
    }catch{
      this.remove()
    }
  }


  cosinus=()=>{
    try{ this.setState({
      result:Math.cos(eval(this.state.result))})
    }catch{
      this.remove()
    }
  }


  tanges=()=>{
    try{ this.setState({
      result:Math.tan(eval(this.state.result))})
    }catch{
      this.remove()
    }
  }

  sqrt = ()=> {
   
     try{ this.setState({
       result:Math.sqrt(eval(this.state.result))})
     }catch{
       this.remove()
     }
  
  }

  reset= ()=>{
    this.setState({result:""})
  }

  remove=()=>{
    try{this.setState({result:this.state.result.slice(0,-1)})}
    catch(e){
     this.reset()
      
    }
  }

  calc=()=>{
  try{ this.setState({
     result:eval(this.state.result)||""+"", 
   
   })} catch (e){
  
      this.reset()
   
   }
 }


 render(){
 return ( 
     <>
    <div className="calc-body"> 
       <Output result ={this.state.result}/>
       <Key buttonPresed={this.buttonPresed}/> 
    </div>
    </>)
 
 }
}

export default App