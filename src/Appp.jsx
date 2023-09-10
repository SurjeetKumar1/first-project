// import React from "react";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Service from "./Service";
// import {Switch,Route,Routes} from "react-router-dom";
// const Appp=()=>{
//     return (
// <>

// <Switch>
// <Routes>
// <Route exact path ="/" component={Home}/>
// <Route exact path ="/about" component={About}/>
// <Route exact path ="/contact" component={Contact}/>
// <Route exact path ="/service" component={Service}/>
// </Routes>
// </Switch>

// </>
//     )
// }
// export default Appp;
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import { Route, Routes,   useNavigate } from "react-router-dom";

const Appp = () => {
    const Navigate=useNavigate();
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        {/* <Redirect to ="/about"/> */}
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  );
};

export default Appp;
