import {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import ChatInput from "./ChatInput";
import ChatBox from "./ChatBox";

function App() {
  const [messages, setMessages] = useState(["Hello"]);

  const sendMessage = (newMsg) => {
    setMessages ([...messages, newMsg]);
  }

  return (
    <div>
      <Title></Title>
      <ChatInput sendMessage={sendMessage}> </ChatInput>
      <ChatBox messages={messages}> </ChatBox>
    </div>
  );
}

export default App;
