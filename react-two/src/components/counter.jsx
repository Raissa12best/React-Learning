 
 import {useState} from 'react';
 
 function Counter() {
   const [count, setCount] = useState(0)
   
   function decrement(){
     setCount(prev=>prev -1)
     
   }
   function increment(){
     setCount(prev => prev +1);
   }

  return(
 <>
 
 <button onClick={decrement}>
          Decrease
         </button>
           <span>{theme}</span>
         <span>{count}</span>
         <button onClick={increment}>
          Increase
         </button>
</>
  )}
  export default Counter;