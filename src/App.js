import React, { useState } from "react";
import ChatBot from "./components/ChatBot/ChatBot";
import Home from "./components/Home/Home";
import eventEmitter from "./eventEmitter";
import Welcome from "./components/Exit/Exit";

function App() {
  const [showHome, setshowHome] = useState(true);
  const [showChatBot, setshowChatBot] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleClick = () => {
    setshowChatBot(true);
    setshowHome(false);
  };
  const handleExit = () => {
    setShowWelcome(true);
    setshowChatBot(false);
  };
  //for rendering exit screen
  eventEmitter.on("handleExit", handleExit);
  //for rendering chatbot screen
  eventEmitter.on("handleClick", handleClick);
  //Rendering according to current state on a single container
  return (
    <div>
      {showHome && <Home />}
      {showChatBot && <ChatBot />}
      {showWelcome && <Welcome />}
    </div>
  );
}

export default App;
