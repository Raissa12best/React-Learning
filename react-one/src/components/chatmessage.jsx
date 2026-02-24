function ChatMessage({ message, sender }) {
  const isRobot = sender === "robot";

  return (
    <div
      className={`flex w-full my-2 ${
        isRobot ? "justify-start" : "justify-end"
      }`}
    >
      <div className="flex items-end gap-2">
        {isRobot && (
          <i className="fa-solid fa-robot bg-green-600 text-white p-2 rounded-full" />
        )}

        <div
          className={`px-4 py-4 rounded-xl max-w-[60%] text-white ${
            isRobot ? "bg-green-500 " : "bg-blue-500"
          }`}
        >
          {message}
        </div>

        {!isRobot && (// guard operator works like if statement in jsx
          <i className="fa-solid fa-user bg-blue-600 text-white p-2 rounded-full" />
        )}
      </div>
    </div>
  );
}

export default ChatMessage;