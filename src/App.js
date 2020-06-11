import React , {useState} from 'react';

import './App.css';
import Message from './message'


function App() {
  let [count , setCount]=useState(0);
  let [isMorning,setMorning]=useState(true);
  return (
    <div className={`box ${isMorning ? 'dayLight': 'night' }`}>
      <h1>Good  {isMorning ? 'Morning':'Night'}</h1>
      
      <Message counter={count}/>
      <br/>
      <button onClick={() => setCount(++count)}> Increament in Counter </button>
      <button onClick={()=> setMorning(!isMorning)}>Change Day Light</button>      
    </div>
  );
}

export default App;
