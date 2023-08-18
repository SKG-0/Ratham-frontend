import React from "react";
import { connect, useSelector } from "react-redux";
import "./Exit.css";

const Exit = () => {
  const name = useSelector((state) => state.user.name);
  const age = useSelector((state) => state.user.age);
  return (
    <div className="container">
      <h2 className="exit-heading">
        Your name {name} and age {age} has been added to student system. You may
        now exit.
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    age: state.user.age,
  };
};

export default connect(mapStateToProps)(Exit);
