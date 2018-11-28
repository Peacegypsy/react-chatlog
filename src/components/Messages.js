import React from "react";
import Timestamp from "./Timestamp";
import PropTypes from "prop-types";

const Messages = props => {
  return (
    <div
      className={
        props.sender === "Vladimir" ? "chat-entry local" : " chat-entry remote"
      }
    >
      <p className="entry-name">{props.sender}</p>
      <section className="entry-bubble">
        <p className="entry-body ">{props.body}</p>
        <p className="entry-time">
          <Timestamp time={props.timeStamp} />
        </p>
      </section>
    </div>
  );
};

Messages.propTypes = {
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string
};

export default Messages;
