import { useState } from "react";

function ChatInput(props) {
  const [text, setText] = useState(""); // [value, updater]

  const updateMessageValue = (event) => {
    const message = event.target.value;
    setText(message);
  };

  function onClick() {
    props.sendMessage(text)
  }


  return (
    <div>

      <input onChange={updateMessageValue}/>
      <button onClick={onClick}>Send</button>
    </div>
  );
}
export default ChatInput;
