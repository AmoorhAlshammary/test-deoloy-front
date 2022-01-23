import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Decoration from "./components/Decoration";
import Reservation from "./components/Reservation";
import Home from "./components/Home"
import AddDecoration from "./components/AddDecoration";
import OneDecoration from "./components/OneDecoration";
import UserReservation from "./components/UserReservation";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";

import "./App.css"
require("dotenv").config();

export default function App() {
  console.log(process.env.REACT_APP_BACKEND_URL,"backend url");
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  return (
    <Router>
      <div className="root-container">
        <Navbar user={user} token={token} setToken={setToken} setUser={setUser} />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>

          <Route exact path="/decoration" render={() => (
            <Decoration token={token} user={user} />
          )} />
          <Route exact path="/decoration/add" render={() => (
            <AddDecoration token={token} user={user} />
          )} />
          <Route exact path="/decoration/:id" >
            <OneDecoration token={token} user={user} />
          </Route>

          <Route exact path="/login" >
            <Login setToken={setToken} setUser={setUser} />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/reservation/user/view" >
            <UserReservation token={token} user={user} />
          </Route>

          <Route exact path="/reservation" render={() => (
            <Reservation token={token} user={user} />
          )} />


        </Switch>
        {/* {token} */}
      </div>
    </Router>
  )
}


