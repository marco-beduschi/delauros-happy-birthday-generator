import {useEffect, useState} from "react";
import './App.css';
import { MESSAGES } from "./messages";

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (messages.length === MESSAGES.length) {
        return null;
    }

    const newMessages = [...messages, MESSAGES[(MESSAGES.length - 1) - (messages.length)]]
    setTimeout(() => setMessages(newMessages), Math.random() * 2 * 1000)
  }, [messages])

  return (
    <div className="App">
      <div className="Header"/>
      <div className="Body">
          <div className="ChatRoom">
              {
                  messages.map((msg) => {
                      return <div className="Message">
                          <div className="MessageHeader">
                              <p>{msg.sender}</p>
                          </div>
                          <div className="MessageContent">
                              <p>
                                  {msg.content}
                              </p>
                          </div>
                      </div>
                  })
              }
          </div>
      </div>
    </div>
  );
}

export default App;
