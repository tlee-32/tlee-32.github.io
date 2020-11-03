function ChatBox(props) {
    return (
        <div>
            {props.msgs.map(msg => {
                return <div>{msg}</div>
            })}
        </div>
    );
}

export default ChatBox;