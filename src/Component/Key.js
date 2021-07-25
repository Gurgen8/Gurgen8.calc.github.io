import {Component} from "react";


 class Key extends Component {
     buttonPresed= event=>{
         this.props.buttonPresed(event.target.name)
     }
   
     render(){
         return (<>
        <div className="buttons">
        <div className="math">
         <button   name="sqrt" onClick={this.buttonPresed}>sqrt </button>
         <button name="sinus" onClick={this.buttonPresed}>sin</button>
         <button name="cosinus" onClick={this.buttonPresed}>cos</button>
         <button name="tanges" onClick={this.buttonPresed}>tan</button>
         <button name="%" onClick={this.buttonPresed}>%</button>
         </div>
        <div className="numbers">
         <button name="1" onClick={this.buttonPresed}>1</button>
         <button name="2" onClick={this.buttonPresed}>2</button>
         <button name="3" onClick={this.buttonPresed}>3</button>
         <button name="4" onClick={this.buttonPresed}>4</button>
         <button name="5" onClick={this.buttonPresed}>5</button>
         <button name="6" onClick={this.buttonPresed}>6</button>
         <button name="7" onClick={this.buttonPresed}>7</button>
         <button name="8" onClick={this.buttonPresed}>8</button>
         <button name="9" onClick={this.buttonPresed}>9</button>
         <button name="0" onClick={this.buttonPresed}>0</button>
         </div>
         <button name="+" onClick={this.buttonPresed}>+</button>
         <button name="-" onClick={this.buttonPresed}>-</button>
         <button name="=" onClick={this.buttonPresed}>=</button>
         <button name="(" onClick={this.buttonPresed}>(</button>
         <button name=")" onClick={this.buttonPresed}>)</button>
         <button name="." onClick={this.buttonPresed}>.</button>
         <button name="/" onClick={this.buttonPresed}>/</button>
         <button name="*" onClick={this.buttonPresed}>*</button>
         <div className="operators">
         <button name="C" onClick={this.buttonPresed}>C</button>
         <button name="CE" onClick={this.buttonPresed}>CE</button>
         </div>
         </div>
         </>) 
     }
    }
 
 export default  Key