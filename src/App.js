
import { useState } from 'react';
import './App.css';


const buttonKeys = [
  { key: "C" },
  { key: "1" },
  { key: "2" },
  { key: "3" },
  { key: "/" },
  { key: "4" },
  { key: "5" },
  { key: "6" },
  { key: "-" },
  { key: "7" },
  { key: "8" },
  { key: "9" },
  { key: "+" },
  { key: "." },
  { key: "0" },
  { key: "=" },
  { key: "*" },
];
function App() {
  function Calculate(num){
    if(num==='='){
      setVal(eval(val))
    }else if(num==='C'){
      setVal('')
    }
    else{
      setVal((val + num))
    }
  }
  const [val, setVal] = useState('');
  return (
    <div className="App">
      <h1>Calculator</h1>
      <input value={val} placeholder="Start your calculation" className="input" readOnly/>
      <div className="button-Container">
        {
          buttonKeys.map((item,i)=>{return (
            <button key={i} className="button" onClick={()=>Calculate(item.key)}>{item.key}</button>
          )})
        }
      </div>

    </div>
  );
}

export default App;
