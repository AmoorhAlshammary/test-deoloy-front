import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import './Login.css';

export default function Login({setToken, setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // you can use variable instded of state in this  case
  const history = useHistory(); 
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        email,
        password,
      });
      //console.log(response.data);// data : token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…yMDF9.BYkEVZv8cZdVUVNDCgv8IRd9r85ex8nDIvJzX2uDdfk', user: {};
    if(response.status===200) {
       // جايه من الريكوست اللي راح لسيرفر
      //  localStorage.setItem("token",JSON.stringify(response.data.token))
       setToken(response.data.token);
      setUser(response.data.user);
       console.log(response.data,"data")
       history.push("/decoration");
    }                        
    } catch (error) {
      console.log(error.response);
    }
  };
  // https://getbootstrap.com/docs/5.1/forms/form-control/
  return (
    <div className="container" id="containerlog">
      <h2>LOGIN ...</h2>
      <div className="mb-3 row" id="containerlo">
        <label HTMLFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-3">
          <input type="email" onChange={(e)=> {changeEmail(e)}} className="form-control" id="staticEmail" placeholder="enter your email" />
        </div>
      </div>
      <div className="mb-3 row" id="containerl">
        <label HTMLFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-3">
          <input type="password" onChange={(e)=> {changePassword(e)}} className="form-control" id="inputPassword" placeholder="enter password" />
        </div>
      </div>
      <button className="btn btn-primary mb-3" id="containerl2"
          onClick={() => {
            checkLogin();
          }}
          >
          Login
      </button>

    </div>
  );
}
