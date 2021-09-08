import { useEffect, useState } from "react";
import "./App.css";
import { MESSAGES } from "./messages";

function App() {
  const [messages, setMessages] = useState([]);
  const today = new Date();

  useEffect(() => {
    if (messages.length === MESSAGES.length) {
      return null;
    }

    const newMessages = [
      ...messages,
      MESSAGES[MESSAGES.length - 1 - messages.length],
    ];
    setTimeout(() => setMessages(newMessages), Math.random() * 2 * 1000);
  }, [messages]);

  return (
    <div className="App">
      <div className="Header" />
      <div className="Body">
        <div className="ChatRoom bg-yellow-50">
          {messages.map((msg) => {
            return (
              <div key={msg.sender} className="rounded-md bg-white">
                <div>
                  <p className="text-sm font-bold text-green-500">
                    {msg.sender}
                  </p>
                </div>
                <div className="text-sm font-base text-gray-900">
                  {msg.content}
                </div>
                <div>
                  <p className="text-xs text-gray-400">
                    {(today.getHours() < 10 ? "0" : "") +
                      today.getHours() +
                      ":" +
                      (today.getMinutes() < 10 ? "0" : "") +
                      today.getMinutes()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
