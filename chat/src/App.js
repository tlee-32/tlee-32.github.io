import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import ChatInput from "./ChatInput";
import ChatBox from "./ChatBox";

function App() {
  const [messages, setMessages] = useState(["Hello Tommy"]);

  const sendMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  };

  return (
    <div>
      <Title />
      <ChatInput sendMessage={sendMessage} />
      <ChatBox messages={messages} />
    </div>
  );
}

export default App;
