
import ChatMessage from "./chatmessage";

function ChatBotO({chatMessages}) {
  // const [chatMessages, setChatMessages] = useState([
  //   {
  //     message: "Hello, Chatbot",
  //     sender: "user",
  //     id: "id1",
  //   },
  //   {
  //     message: "Hello, How can I help you today?",
  //     sender: "robot",
  //     id: "id2",
  //   },
  //   {
  //     message: "What's today's date please",
  //     sender: "user",
  //     id: "id3",
  //   },
  //   {
  //     message: "Today is February 16",
  //     sender: "robot",
  //     id: "id4",
  //   },
  // ]);

  // function sendMessage() {
  //   setChatMessages([
  //     ...chatMessages,
  //     {
  //       message: "test",
  //       sender: "user",
  //       id: crypto.randomUUID(),
  //     },
  //   ]);
  // }

  return (
    <>
      {/* <button onClick={sendMessage} className="bg-green-600 text-white">
        sendMessage
      </button> */}

      {chatMessages.map((msg) => (
        <ChatMessage
          key={msg.id}
          message={msg.message}
          sender={msg.sender}
        />
      ))}
    </>
  );
}

export default ChatBotO;
