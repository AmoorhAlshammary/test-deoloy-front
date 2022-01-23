import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";
import './SignUp.css';

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // you can use variable instded of state in this  case
  const history = useHistory();
  const changeName = (e) => {
    setName(e.target.value);
    // console.log(name)
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const addUser = async () => {
    console.log({
      name: name,
      email: email,
      password: password,
    });
    // eslint-disable-next-line
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signUp`, {
      name,
      email,
      password,
    });
    history.push("/login")
  };
  // https://getbootstrap.com/docs/5.1/forms/form-control/
  return (
    <div className="container" id="containersign">
      <h2>SIGNUP ...</h2>
      <div className="mb-3 row" id="containersi">
        <label HTMLFor="name" className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-3">
          <input type="text" onChange={(e)=> {changeName(e);}} className="form-control" autoComplete="off" id="name" placeholder="enter your name" />
        </div>
      </div>
      <div className="mb-3 row" id="containersig">
        <label HTMLFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-3">
          <input type="email" onChange={(e)=> {changeEmail(e)}} className="form-control" id="staticEmail" placeholder="enter your email" />
        </div>
      </div>
      <div className="mb-3 row" id="containersig123">
        <label HTMLFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-3">
          <input type="password" onChange={(e)=> {changePassword(e)}} className="form-control" id="inputPassword" placeholder="enter password" />
        </div>
      </div>
      <button className="btn btn-primary mb-3" id="containersig12"
          onClick={() => {
            addUser();
          }}
        >
          Sing Up
      </button>
    </div>
  );
}
