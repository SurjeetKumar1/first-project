// import React from "react";
import ReactDOM from 'react-dom';
import Appp from "./Appp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Appp />
      {/* <Home/> */}
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
