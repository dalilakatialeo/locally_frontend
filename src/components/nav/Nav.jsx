// npm modules from https://npm.js.com/
import React, {useState, useEffect} from "react"
import { Link, useLocation } from "react-router-dom"
// import LoginForm from "../LoginForm/LoginForm"
import "./Nav.css"


const Nav = () => {
  const location = useLocation()
  // console.log(location)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const logout = () => {
    localStorage.setItem('token', null)
    setToken(null)
    // window.location = window.location.origin
  }
  console.log(localStorage.getItem('token'))
  return (
    <div>
      <nav className="navbar">
        <Link className={`${location.pathname === '/' ? 'active' : ''}`}to="/">Home</Link>
        
        {
          token 
          ? <div id="loggedIn-nav">
              <Link className={`${location.pathname === '/new-project/' ? 'active' : ''}`}to="/new-project/">New project +</Link>
              <button onClick={logout} className={`${location.pathname === '/login/' ? 'active' : ''}`}>Logout</button>
            </div>
          : <Link className={`${location.pathname === '/login/' ? 'active' : ''}`} to="/login/">Login</Link>

        }
      </nav>
      <div id="img-div">
        <img id="logo" src={"../locally-logo.jpg"} alt="locally"/>
      </div>
    </div>
  )
}

export default Nav