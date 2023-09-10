import React, { useState } from "react";
import  ReactDOM  from "react-dom";

const App=()=>{
  const [set,setnum]=useState(0);
return(
  <>
 <button onClick={()=>{setnum(set+1)}}> click me{set} </button>
 
  </>
)
}

ReactDOM.render(
  <>
  <h1>hii</h1>
    <App/>
  </>,
  document.getElementById("root")
)
