import React from "react";
import Chatbot from "react-chatbot-kit";

import "react-chatbot-kit/build/main.css";
import "./ChatBot.css";

import config from "./config";
import ActionProvider from "./ActionProvider";

import MessageParser from "./MessageParser";
import { connect } from "react-redux";

function ChatBot() {
  return (
    <div className="container">
      <div>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

export default connect()(ChatBot);
