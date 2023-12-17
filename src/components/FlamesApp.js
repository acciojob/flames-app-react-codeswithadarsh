import React, { Component, useState, useRef } from "react";
import "../styles/App.css";

const App = () => {
  const first = useRef(null);
  const second = useRef(null);
  const [status, setstatus] = useState("");
  const handleStatus = () => {
    let firstname = first.current.value;
    let secondname = second.current.value;
    let totallength = (firstname + secondname).length;
    let similar = 0;
    let different = 0;

    for (let i = 0; i < firstname.length; i++) {
      if (secondname[i] === firstname[i]) {
        similar++;
      } else {
        different++;
      }
    }
    const output = (totallength - similar) % 6;
    let result = "";
    switch (output) {
      case 0:
        result = "Siblings";
        break;
      case 1:
        result = "Friends";
        break;
      case 2:
        result = "Love";
        break;
      case 3:
        result = "Affection";
        break;
      case 4:
        result = "Marriage";
        break;
      case 5:
        result = "Enemy";
        break;
      default:
        result = "";
    }
    setstatus(result);
  };
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <input type="text" ref={first} id="fname" data-testid="input1" />
      <input type="text" ref={second} id="lname" data-testid="input2" />
      <button
        type="button"
        data-testid="calculate_relationship"
        onClick={handleStatus}
      >
        Calculate Relationship Future
      </button>
      <button
        type="button"
        data-testid="clear"
        onClick={() => {
          setstatus("");
        }}
      >
        Clear inputs and relationship status
      </button>
      <h3 data-testid="answer">{status}</h3>
    </div>
  );
};

export default App;