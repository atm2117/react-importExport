import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePie, triplePie } from "../public/math";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePie()}</li>
    <li>{triplePie()}</li>
  </ul>,
  document.getElementById("root")
);
