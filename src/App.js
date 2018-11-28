import React, { Component } from "react";
import "./App.css";
import ChatLog from "./components/ChatLog";
import chatMessages from "./data/messages.json";

class App extends Component {
  render() {
    console.log(chatMessages);

    return (
      <main className="App">
        <ChatLog messages={chatMessages} />
      </main>
    );
  }
}

export default App;
