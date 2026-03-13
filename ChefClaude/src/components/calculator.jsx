import {useState} from 'react';

const Calculator = () => {
const [input, setInput] = useState("");
const [storedValue, setStoredValue] = useState(null);
const [operator, setOperator] = useState(null);
const [waitingForSecond, setWaitingForSecond] = useState(false);
   // handle clicking
  const handleClick = (value) => {

  if (waitingForSecond) {
    setInput(value);          // start new number
    setWaitingForSecond(false);
  } else {
    setInput((prev) => prev + value);
  }

};
  // handle clearing
  const handleClear =()=>{
    setInput("");
   };
   //handle operators
  const handleOperator = (op) => {
  setStoredValue(Number(input));
  setOperator(op);
  setWaitingForSecond(true);
};
   // handle calculate
  const handleCalculate = () => {

  const current = Number(input);
  let result;

  switch (operator) {
    case "+":
      result = storedValue + current;
      break;
    case "-":
      result = storedValue - current;
      break;
    case "*":
      result = storedValue * current;
      break;
    case "/":
      result = storedValue / current;
      break;
    default:
      return;
  }

  setInput(result.toString());
  setStoredValue(null);
  setOperator(null);
  setWaitingForSecond(false);

};





return (
    <>
    <div className="flex justify-center align-middle">
        <div className="border-1 border-slate-400 p-7  shadow-2xl bg-amber-200">
            <div className="bg-slate-400 text-white text-[2rem] text-right border-1 mb-[20px] overflow-x-auto shadow-md focus-within:shadow-xl">{input || 0}</div>
            <div className="grid grid-cols-4  gap-[12px]  ">
                
                <button className="bg-white p-[18px] border    rounded-4xl cursor-pointer " onClick={handleClear} >AC</button>
                <button className="bg-white p-[18px]  border    rounded-4xl cursor-pointer" onClick={handleClick}>+/-</button>
                <button className="bg-white p-[18px]  border    rounded-4xl cursor-pointer"onClick={()=> handleOperator("%")}>%</button>
                <button className="bg-amber-500 p-[18px]  border    rounded-4xl cursor-pointer" onClick={()=> handleOperator("/")}>/</button>
                

                <button className="bg-white p-[18px]  border rounded-4xl cursor-pointer" onClick={()=> handleClick("7")}>7</button>
                <button className="bg-white p-[18px] border rounded-4xl cursor-pointer" onClick={()=> handleClick("8")}>8</button>
                <button className="bg-white p-[18px] border rounded-4xl cursor-pointer" onClick={()=> handleClick("9")}>9</button>
                <button className="bg-amber-500 border rounded-4xl cursor-pointer" onClick={()=> handleOperator("*")} >x</button>

                <button className="bg-white p-[18px]  border    rounded-4xl cursor-pointer " onClick={()=> handleClick("4")}>4</button>
                <button className="bg-white p-[18px] border    rounded-4xl cursor-pointer" onClick={()=> handleClick("5")}>5</button>
                <button className="bg-white p-[18px] border    rounded-4xl cursor-pointer" onClick={()=> handleClick("6")}>6</button>
                <button className="bg-amber-500 p-[18px]  border    rounded-4xl cursor-pointer" onClick={()=> handleOperator("-")}>-</button>

                <button className="bg-white p-[18px] border    rounded-4xl cursor-pointer" onClick={()=> handleClick("1")}>1</button>
                <button className="bg-white p-[18px]  border    rounded-4xl cursor-pointer" onClick={()=> handleClick("2")}>2</button>
                <button className="bg-white p-[18px] border    rounded-4xl cursor-pointer" onClick={()=> handleClick("3")}>3</button>
                <button className="bg-amber-500 p-[18px] border    rounded-4xl cursor-pointer" onClick={()=> handleOperator("+")}>+</button>

                <button className="bg-white col-span-2 p-[18px] border    rounded-4xl cursor-pointer" onClick={()=> handleClick("0")}>0</button>
                <button className="bg-white p-[18px]  border    rounded-4xl cursor-pointer" onClick={()=> handleClick(".")}>.</button>
                <button className="bg-amber-500 p-[18px] border    rounded-4xl cursor-pointer" onClick={handleCalculate}>=</button>
            </div>
        </div>
    </div>
    </>
);
}
export default Calculator;