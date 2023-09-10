import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
   
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img
                    src={props.imgsrc}
                    style={{ height: "220px", width: "320px" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{props.tittle}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="#" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
            
    </>
  );
};
export default Card;