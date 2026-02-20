import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Message from './components/reactOne'
// import ReactFacts from'./components/reactFacts'
// import Header from './components/Header'
// import Footer from './components/footer'
import TextBox from './components/textBox'
import ChatMessage from './components/chatmessage'
import ChatBotO from './components/ChatBotO'
// import SendMessage from'./components/sendMessage'
function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello, Chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello, How can I help you today?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "What's today's date please",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is February 16",
      sender: "robot",
      id: "id4",
    },
  ]);

  return (
    <>
    
    {/* <Header/>
    <Message/>
    <ReactFacts/>
    <Footer/> */}

    <TextBox
    chatMessages={chatMessages}// save any type of values in a prop
    setChatMessages={setChatMessages}/>
    <ChatMessage
    />
    <ChatBotO
    chatMessages={chatMessages}//
    />
    {/* <SendMessage/> */}

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
