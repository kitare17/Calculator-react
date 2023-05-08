
import './App.css';
import {useRef, useState} from 'react';



function App() {
   const inputRef=useRef(null);
    const resultRef=useRef(null);

   const [result,setResult] =useState(0);
   function plus(e){
   e.preventDefault(); 
   setResult((result) => result + Number(inputRef.current.value)); 
   };

   function subtract(e){
   e.preventDefault(); 
   setResult((result) => result - Number(inputRef.current.value)); 
   };
   function multiply(e){
   e.preventDefault(); 
   setResult((result) => result * Number(inputRef.current.value)); 
   };
   function divide(e){
   e.preventDefault(); 
   setResult((result) => result / Number(inputRef.current.value)); 
   };
  const resetInput= (e) => {
    e.preventDefault();
    inputRef.current.value=null;
  };
  const  resetResult=()=> {
    setResult(0);
  };
  return (
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
   {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <br></br>
        <button onClick={plus}>add</button> 
        <button onClick={subtract}>subtract</button> 
        <button onClick={multiply}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset Result</button> 
        {/* Add the subtract button */} 
        {/* Add the multiply button */} 
        {/* Add the divide button */} 
        {/* Add the resetInput button */} 
        {/* Add the resetResult button */} 
      </form> 
    </div> 
  );
}

export default App;
