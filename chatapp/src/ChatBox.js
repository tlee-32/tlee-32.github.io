function ChatBox (props) {
    return (
        <div>
            {props.messages.map((message) => {
                return <div>{message}</div>;
            })}   
        </div>
    );
}

export default ChatBox;