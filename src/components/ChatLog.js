import React from "react";
import Messages from "./Messages";

const ChatLog = props => {
  const messages = props.messages.map(message => {
    return (
      <Messages
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        key={message.sender}
      />
    );
  });
  return <section>{messages}</section>;
};

export default ChatLog;
