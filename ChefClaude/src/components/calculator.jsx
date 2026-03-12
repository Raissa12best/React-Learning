import {useState} from 'react';

const Calculator = ()=> {
    const[input,setInput]=useState("");
   // handle clicking
   const handleClick =(value)=>{
    setInput((prev)=> prev + value);
   };
  // handle clearing
  const handleClear =()=>{
    setInput("");
   };
   // handle calculate
   const handleCalculate =()=>{
    try{
     setInput(eval(input).toString());
    }
    catch(error){
        setInput("Error")
    }
    
   };





return (
    <>
    <div className="flex justify-center align-middle">
        <div className="border-1 border-slate-400 p-7 border-gray-030">
            <div className="bg-slate-400 text-white text-[2rem] text-right border-1 mb-[20px] overflow-x-auto">{input || 0}</div>
            <div className="grid grid-cols-4  gap-[12px]  ">
                
                <button className="bg-white p-[18px] border-none border-[10px]  cursor-pointer " onClick={handleClear}>AC</button>
                <button className="bg-white p-[18px] cursor-pointer" onClick={handleClick}>+/-</button>
                <button className="bg-white p-[18px] cursor-pointer" onClick={handleClick}>%</button>
                <button className="bg-amber-500 p-[18px] cursor-pointer" onClick={handleClick}>/</button>
                

                <button className="bg-white p-[18px] cursor-pointer">7</button>
                <button className="bg-white p-[18px] cursor-pointer">8</button>
                <button className="bg-white p-[18px] cursor-pointer">9</button>
                <button className="bg-amber-500 cursor-pointer">x</button>

                <button className="bg-white p-[18px] cursor-pointer">4</button>
                <button className="bg-white p-[18px] cursor-pointer">5</button>
                <button className="bg-white p-[18px] cursor-pointer">6</button>
                <button className="bg-amber-500 p-[18px] cursor-pointer">-</button>

                <button className="bg-white p-[18px] cursor-pointer">1</button>
                <button className="bg-white p-[18px] cursor-pointer">2</button>
                <button className="bg-white p-[18px] cursor-pointer">3</button>
                <button className="bg-amber-500 p-[18px] cursor-pointer">+</button>

                <button className="bg-white col-span-2 p-[18px] cursor-pointer">0</button>
                <button className="bg-white p-[18px] cursor-pointer">.</button>
                <button className="bg-amber-500 p-[18px] cursor-pointer">=</button>
            </div>
        </div>
    </div>
    </>
);
}
export default Calculator;