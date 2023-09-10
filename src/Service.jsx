import React from "react";
import Cardd from "./Cardd";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
     
     <div className="my-5">
        <h1 className="tab-center">our services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row gy-4">
          <div className="col-10 max auto">
            <div className="row">
         
         {
          Sdata.map((val,index)=>{
            return <Cardd key={index}
            imgsrc={val.imgsrc}
            tittle={val.tittle}
             />
          })
         }
             
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};
export default Service;
