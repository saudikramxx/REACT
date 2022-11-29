import React from "react";
import ReactDOM from "react-dom";
const fname = "saud";
const lname = "Ikram";
const num = 11;
ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>your lucky number is: {num}</p>
  </div>,
  document.getElementById("root")
);
