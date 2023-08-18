import React from "react";
import "./Home.css";
import eventEmitter from "../../eventEmitter";
import { ENTER_STUDENT_INFO, ENROLL_NOW } from "../../utilities/constants";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1 className="heading">{ENTER_STUDENT_INFO}</h1>
        <button
          className="enroll-now-btn"
          onClick={() => {
            eventEmitter.emit("handleClick");
          }}
        >
          {ENROLL_NOW}
        </button>
      </div>
    </>
  );
};

export default Home;
