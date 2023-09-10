import React, { useState } from "react";

const Contact = () => {
  const [data,setdata]=useState({
    fullname:"",
    phone:"",
    msg:"",
  })
  const InputEvent=(event)=>{
  const { name, value }=event.target;
  setdata((preval)=>{
    return{
      ...preval,

      [name]:value,
    }
  })
  }
  const formSubmit=(e)=>{
e.preventDefault();
alert(
  `my name is ${data.fullname}.my mobile number is ${data.phone}`
)
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-mid-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                 Full name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="Fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enetr your name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="enter mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
                <br/>
                <div class="col-12">
    <button type="submit" class="btn btn-primary">submit form</button>
  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Contact;
