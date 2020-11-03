import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Title from "./Title";
import ChatInput from "./ChatInput";
import ChatBox from "./ChatBox";

function App() {
  const [msgs, setMsg] = useState(["Hello World"]);

  const sendMsg = (newMsg) => {
    setMsg([...msgs, newMsg]);
  }

  return (
    <div>
      <Title></Title>
      <ChatInput sendMsg={sendMsg}></ChatInput>
      <ChatBox msgs={msgs}></ChatBox>
    </div>
  );
}

export default App;
