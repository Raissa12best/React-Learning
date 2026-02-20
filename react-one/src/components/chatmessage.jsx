function ChatMessage({message,sender} ){
    // const message=props.message;
    // const sender=props.sender;
    // const {message,sender}=props;
    // if(sender==="robot"){
    //  return(
    //      <div className="flex p-20">
    //          <i className="fa-solid fa-robot text-gray-100 border-2 rounded-xl p-2 bg-green-600"></i>
    //         {message}
            
       
    //     </div>
    //  )
    // }
    return(
       
        <div className="text-center h-20">
            {sender ==="robot" && 
            (<i 
                className="fa-solid fa-robot text-gray-100 border-2 rounded-full p-2 bg-green-600"></i>

            )}
            {message }
            {sender==="user" && // guard operator that work like if statement in jsx
             (<i 
                className="fa-solid fa-user text-gray-100 border-2 rounded-full p-2 bg-green-600 "></i>

             )}
       
        </div>
    )
}
export default ChatMessage;