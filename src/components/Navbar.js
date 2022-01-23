import React from 'react'
import { Link, useHistory } from "react-router-dom";

export default function Navbar({setUser, setToken, token, user}) {
  const history = useHistory();
  const logout = ()=>{
    setToken('')
    setUser({})
    history.push('/')
  }
  // https://getbootstrap.com/docs/5.1/components/navbar/
  return (
    // {console.log(user);}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      {console.log(user,"user")}
  
        <Link className="navbar-brand" to="/">Amirah Decoration</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
        

            { token ? <Link className="nav-link" to="/decoration">Decorations</Link> : null}
            { user.isAdmin === false ? <Link className="nav-link" to={`/reservation/user/view`} >Reservations</Link> : null}
            { user.isAdmin ? <Link className="nav-link" to='/decoration/add'>Add</Link> : null}
            { user.isAdmin ? <Link className="nav-link" to='/reservation'>Reservations</Link> : null}
            {token ? 
              <button className="btn btn-light" onClick={logout}>Logout</button>
              :
              <>
                <Link className="nav-link" to="/signup">Signup</Link>
                <Link className="nav-link" to="/login">Login</Link>

 
      
              </>
            }
          </div>
        </div>
      </div>
    </nav>
  );

}

