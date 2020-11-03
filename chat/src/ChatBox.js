function ChatBox(props) {
  return (
    <div>
      {props.messages.map((message) => {
        return (
          <div
            style={{
              color: "blue",
            }}
          >
            {message}
          </div>
        );
      })}
    </div>
  );
}
export default ChatBox;
