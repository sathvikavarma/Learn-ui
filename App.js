import { React, useState } from 'react'
 import "./App.css"
import ReactDOM from 'react-dom'



export default function App() {
  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
  }
 
  return (
    <div class="split left">
      <div class="centered">
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
    </div>
    </div>
    

  );
}
export   function tick() {
    
  const date =  new Date().toLocaleTimeString();
  
  var greetings = "";
  
    const hours = new Date().getHours();
    
    if(hours>1 && hours<12){
        greetings = "Good Morning";
    } else if(hours>12 && hours<18) {
        greetings = "Good Afternoon";
    } else if(hours>18 && hours<20) {
        greetings = "Good Evening";
    } else if(hours>20){
        greetings = "Good Night";
    }
     
const element = (
  <div class="split right">
      <div class="centered">
<div class="card">
    <div class="time">
        <h1>{greetings}</h1>
        <h2>{date}</h2>
    </div>
</div>
</div>
</div>
);
setInterval(tick, 1000);
ReactDOM.render(
element,
document.getElementById('root'));
}




