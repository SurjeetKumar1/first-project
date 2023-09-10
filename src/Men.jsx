import React from "react" ;
import { Link } from "react-router-dom";

const Meno=()=>{
    return (
        <>
        <Link to='/'>About us</Link>
        <Link to='/contect'>contact us</Link>
        <br/>
       
{/* <a href="/">About us</a>
<a href="/contact">contact</a> */}
        </>
    )
}

export default Meno;