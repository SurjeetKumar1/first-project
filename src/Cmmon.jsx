import React from "react";
import { NavLink } from "react-router-dom";
// import wed from "../src/images/img2.svg";

const Cmmon = (props) => {
  return (
    <>
      <section id="header" className="d-flex-align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 max auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center">
                  <h1>
                    {" "}
                    {props.name}{" "}
                    <strong className="brand-name"> thappa techical</strong>
                  </h1>
                  <br></br>
                  <h2 className="my-3">
                    we are the team of talent devloper making websites
                  </h2>
                  <div className="mt-3">
                    {/* <a href="your-link-here" className="btn-get-started">Get Started</a> */}
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  {/* <img src="https://empoche.com/user/pages/05.help/03.getting-started/your-first-task/rocket-maker.png?g-e07b98a8" style={{height:"400px", width: "600px"}} alt ="home img"/> */}
                  <img
                    src={props.imgsrc}
                    style={{ height: "400px", width: "600px" }}
                    visit="/service"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1> welcome about</h1>
    </>
  );
};
export default Cmmon;
