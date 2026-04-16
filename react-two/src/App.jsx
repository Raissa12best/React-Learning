// // import {useState} from 'react'
// // import './App.css'
// // import Joke from './components/jokesD'
// // import jokes from './components/jokes'
// // // import Counter from './components/counter'
// // // import Posts from './components/useEffect'

// // // function App() {
// // //   // const [count, setCount] = useState(0)
// // //   // const [items,setItems]=useState([])
// // //   // const [resourceType,setResourceType] = useState('posts');
// // //   //     useEffect(()=>{
// // //   //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
// // //   //       .then((response) => response.json())
// // //   //       .then((json) => setItems(json));
// // //   //     },[resourceType])
// // //   // function decrement(){
// // //   //   setCount(prev=>prev -1)
    
// // //   // }
// // //   // function increment(){
// // //   //   setCount(prev => prev +1);
// // //   // }

// // //   return (
// // //     <>
// // //     <Counter/>
// // //     <Posts/>
// // //     {/* <button onClick={decrement}>
// // //           Decrease
// // //          </button>
           
// // //          <span>{count}</span>
// // //          <button onClick={increment}>
// // //           Increase
// // //          </button>
// // //           <div>
// // //         <button onClick={()=>setResourceType('posts')}>Posts</button>
// // //          <button onClick={()=>setResourceType('users')}>Users</button>
// // //           <button onClick={()=>setResourceType('comments')}>Comments</button>
// // //         </div>
// // //         <h1>{resourceType}</h1>
// // //         {items.map(item=>{
// // //           return <pre>{JSON.stringify(item)}</pre>
// // //         })}
        
// // //      */}
// // //     </>
// // //   )
// // // }

// // // export default App
// // // import  { useState, useMemo } from 'react';
// // // const filterItems = (items, searchTerm) => {
// // //   console.log('Filtering items (expensive operation)...');
// // //   return items.filter(item =>
// // //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );
// // // };

// // // const ItemList = ({ items }) => {
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [count, setCount] = useState(0);

// // //   const filteredItems = useMemo(() => {
// // //     return filterItems(items, searchTerm);
// // //   }, [items, searchTerm]); 

// // //   return (
// // //     <div>
// // //       <button onClick={() => setCount(c => c + 1)}>
// // //         Increment Count: {count}
// // //       </button>
// // //       <input
// // //         type="text"
// // //         placeholder="Search items..."
// // //         value={searchTerm}
// // //         onChange={(e) => setSearchTerm(e.target.value)}
// // //       />
// // //       <ul>
// // //         {filteredItems.map(item => (
// // //           <li key={item.id}>{item.name}</li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // const App = () => {
// // //   const initialItems = [
// // //     // ... an array of a large number of items
// // //     { id: 1, name: 'Apple' },
// // //     { id: 2, name: 'Banana' },
// // //     { id: 3, name: 'Cherry' },
// // //     {id:4, name: 'Guava'},
// // //     // ...
// // //   ];

// // //   return <ItemList items={initialItems} />;
// // // };
// // function App() {
// //   const [unreadMessages, setUnreadMessages] = useState(["a", "b"])
    
// //     const jokeElements = jokes.map(joke => {
// //         return (
// //             <Joke 
// //                 key={joke.id}
// //                 setup={joke.setup} 
// //                 punchline={joke.punchline} 
// //             />
// //         )
// //     })
// //     return (
// //       <>
// //         <div>
// //             {jokeElements}
// //         </div>
// //         <div>
// //             {
// //                 unreadMessages.length > 0 && 
// //                 <h1>You have {unreadMessages.length} unread messages!</h1>
// //             }
// //             {
// //                 unreadMessages.length === 0 && 
// //                 <p>You have no unread messages</p>
// //             }
            
            
// //         </div>
// //         </>
// //     )
// // }
// // export default App;
// import { useState } from "react";

// import "./App.css";

// function App() {
//   const requirements = [{
// title:"numberOfChar",
// name:"At least 8 characters",
// isChecked:false

//   },
//   {
// title:"upperchar",
// name:"Contains uppercase character",
// isChecked:false

//   },
//   {
// title:"lowerchar",
// name:"Contains lowercase character",
// isChecked:false

//   },
//   {
// title:"digit",
// name:"Contains a digit",
// isChecked:false

//   },
//   {
// title:"specialChar",
// name:"Contains a special character",
// isChecked:false

//   }
    
//   ];
//    const upperLetter=[ "A","B","C","D","E","F","G","H","I","J","K","L","M",
//   "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 
  
//   const lowerLetter=upperLetter.map((letters)=>letters.toLowerCase())
//   const [requirementData,setRequirement]=useState(requirements)
//   const digits=["0","1","2","3","4","5","6","7","8","9"]
//    const [password,setPassword]=useState("")
   
//   const getPassowrd=(event)=>{
//     const value=event.target.value
//     setPassword(value)
//     togggleRequirement(value)
//   }
//   //toggling requirements
//   const togggleRequirement=(value)=>{
//     for(let elem of value){
//       if(value.length>=8){
//       setRequirement(prev=>
//          prev.map(req=>{
//           if(req.title==="numberOfChar"){
//             return{...req,isChecked:true} 
//           }
//           return req
//         })
//       )
//     }

//   if(upperLetter.includes(elem)){
//     //updating requirement for uppercase check
//     setRequirement((prev)=>
//    prev.map((req)=>{
//         if(req.title==="upperchar"){
//           return {...req,isChecked:true}
//         }
//         return req
//       })
//     )
//   }
//   //LOWER CASE
// else if(lowerLetter.includes(elem)){
//   setRequirement(prev=>
//     prev.map(req=>{
//       if(req.title==="lowerchar"){
//  return {...req,isChecked:true}
//       }
//       return req
//     })
//     )}
//     // digits
//     else if(digits.includes(elem)){
//       setRequirement(prev=>
//         prev.map(req=>{
//           if(req.title==="digit"){
//             return {...req,isChecked:true}
//           }
//           return req
//         })
//       )
//     }
//       // otherwise
//       else{
//         setRequirement(prev=>
//           prev.map(req=>{
//             if(req.title==="specialChar"){
//               return {...req,isChecked:true}
//             }
//             return req
//           })
//         )
//       }
// }

//   }
//   const requirementslist=requirementData.map((requirement)=>{
//     return (
//         <li className="text-gray-400 flex gap-4" key={requirement.title}>
//             <input type="radio" checked={requirement.isChecked}  readOnly />
//             <span>{requirement.name}</span>
//         </li>
        
//     )
//   })
//  const [showPassword,setShowPassword]=useState(true)
//   function toggleShowPassword(){
// setShowPassword(prev=>!prev)
//   }
//   const handleSubmit=()=>{
//     setPassword("")
//     setRequirement(requirements.map(req => ({ ...req, isChecked: false })));

//   }
//   return (
//     <div className="flex  items-center   justify-center my-20 border-2 border-gray-400 rounded-2xl mx-50  ">
//       <div className="space-y-2 py-12" >
        
//         <h1 className="text-4xl font-bold  ">Create Password</h1>
//         <p className="text-xl text-gray-500  ">Enter a secure Password</p>
//         <div className=" p-3  border-gray-400 border-2 flex justify-between  rounded-3xl " >
//           <input 
//           className=" text-gray-400  focus:outline-none" 
//             type={showPassword?"text":"password"}
//             name="password"
//             value={password}
//             onChange={getPassowrd}
//             placeholder="Enter your password"
//           />
//           {showPassword?<i onClick={toggleShowPassword} className="fas fa-eye  text-gray-400"></i>:<i onClick={toggleShowPassword} className="fas fa-eye-slash text-gray-400"></i>}
          
//           {/* */}
//         </div>
//         <h2 className="text-xl font-bold">Password Requirements</h2>
//         <ul  className="space-y-2">
//           {requirementslist}
//         </ul>
//         <button  onClick={handleSubmit}type="submit" className="bg-gray-500 py-3 px-30 text-white  rounded-4xl">Submit</button>
//       </div>
//     </div>
//   );
// }

// export default App;
import CardList from './components/cardsdata'
import Counter from './components/useReducer'

import Employees from './components/Employee'
import ToggleButtons from './components/toggleColors'
import Toggle from './components/toggle'
import Users from './components/users'
function App(){
  return(
    <>
    <CardList/>
    <Counter/>
  
    <Employees/>
    <ToggleButtons/>
    <Toggle/>
    <Users/>

    </>
  )
}
export default App;
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import Message from './components/reactOne'
// // import ReactFacts from'./components/reactFacts'
// // import Header from './components/Header'
// // import Footer from './components/footer'
// import TextBox from './components/textBox'
// import ChatMessage from './components/chatmessage'
// import ChatBotO from './components/ChatBotO'
// // import SendMessage from'./components/sendMessage'
// function App() {
//   const [chatMessages, setChatMessages] = useState([
//     {
//       message: "Hello, Chatbot",
//       sender: "user",
//       id: "id1",
//     }]);

//   return (
//     <>
    
//     {/* <Header/>
//     <Message/>
//     <ReactFacts/>
//     <Footer/> */}

//     <TextBox
//     chatMessages={chatMessages}// save any type of values in a prop
//     setChatMessages={setChatMessages}/>
//     <ChatMessage
//     />
//     <ChatBotO
//     chatMessages={chatMessages}//
//     />
//     {/* <SendMessage/> */}

//       {/* <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// export default App
