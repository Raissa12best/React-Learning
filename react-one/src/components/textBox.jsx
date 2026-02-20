
import {useState} from 'react'
function TestBox({chatMessages,setChatMessages}){
 const [inputText,setInputText] = useState([])
  function saveInput(event){
    setInputText(event.target.value);

  } 
  function sendMessage(){
    const newChatMessages= [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
  
  setChatMessages(newChatMessages)
    const response=Chatbot.getResponse(inputText);
     setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("")
  }             // pascal case
 return(
    
    <div className="flex gap-5 justify-center">
        <input 
          className="border-2   rounded-lg"
          placeholder="How can I help you !" 
          size="55"
    
          onChange={saveInput}
          value={inputText}
          />
        <button  className="bg-green-700 px-4 shadow-green-900 shadow-lg hover:-translate-y-1 rounded-xl text-gray-100 font-semibold" onClick={sendMessage}> Send</button>
       
            {/* </button> // self closing element */}
    </div>

 )
}
export default TestBox;