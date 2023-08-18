import React from "react";
import "./GotItButton.css";
import { GOT_IT } from "../../utilities/constants";

const GotItButton = (props) => {
  const handleClick = () => {
    const text = "Got it";
    props.actionProvider.handleGotIt(text);
  };

  return (
    <button onClick={handleClick} className="got-it-button">
      {GOT_IT}
    </button>
  );
};

export default GotItButton;
