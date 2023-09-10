import React from "react";
import Cmmon from "./Cmmon";
import { NavLink } from "react-router-dom";
// import wed from "../src/images/img2.svg";

const About = () => {
  return (
    <>
      <Cmmon
        name="welcome to about page "
        imgsrc="https://deepverse.tech/assets/img/hero-img.png"
        style={{ height: "400px", width: "600px" }}
        visit="/contact"
        btname="contact now"
      />
    </>
  );
};
export default About;
