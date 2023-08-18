import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import GotItButton from "../GotItButton/GotItButton";
import AgeDropdown from "../AgeDropdown/AgeDropdown";
import { WELCOME_STUDENT_INFO } from "../../utilities/constants";
const config = {
  //initial message to chatbot
  initialMessages: [
    createChatBotMessage(WELCOME_STUDENT_INFO, {
      widget: "gotItButton",
    }),
  ],
  //setting states
  state: {
    askName: false,
    askAge: false,
    name: "",
    age: "",
  },
  //button and dropdown widgets
  widgets: [
    {
      widgetName: "gotItButton",
      widgetFunc: (props) => <GotItButton {...props} />,
    },
    {
      widgetName: "agedropdown",
      widgetFunc: (props) => <AgeDropdown {...props} />,
    },
  ],
};

export default config;
