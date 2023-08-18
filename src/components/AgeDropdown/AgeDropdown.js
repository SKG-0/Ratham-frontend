import React, { useState } from "react";
import "./AgeDropdown.css";
import { SELECT_NUMBER, SUBMIT } from "../../utilities/constants";
const AgeDropdown = (props) => {
  const [age, setAge] = useState("");
  //setting range from 23-41 according to age
  const range = Array.from({ length: 23 }, (_, index) => index + 18);

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = () => {
    if (age !== "") {
      props.actionProvider.handleAge(age);
    }
  };

  return (
    <div className="dropdown-container">
      <select value={age} onChange={handleAgeChange} className="dropdown">
        <option value="">{SELECT_NUMBER}</option>
        {range.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <button className="dropdown-button" onClick={handleSubmit}>
        {SUBMIT}
      </button>
    </div>
  );
};

export default AgeDropdown;
