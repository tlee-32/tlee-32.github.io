import { useState } from "react";

function ChatInput(props) {
    const [text, setText] = useState("");

    const updateMsg = (event) => {
        const msg = event.target.value;
        setText(msg);
    }

    const onClick = () => {
        props.sendMsg(text);
    }

    return (
        <div>
            <input onChange={updateMsg}></input>
            <button onClick={onClick}>Send</button>
        </div>
    );
}

export default ChatInput;