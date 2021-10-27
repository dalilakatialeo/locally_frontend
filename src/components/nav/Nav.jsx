// npm modules from https://npm.js.com/
import React from "react"
import { Link, useLocation } from "react-router-dom"
// import LoginForm from "../LoginForm/LoginForm"
import "./Nav.css"


// something to handle authentication and only show new project + if user is logged in

const Nav = () => {
  const location = useLocation()
  // console.log(location)
  return (
    <div>
      <nav className="navbar">
        <Link className={`${location.pathname === '/' ? 'active' : ''}`}to="/">Home</Link>
        
        {
          localStorage.getItem('token') 
          ? <Link className={`${location.pathname === '/new-project/' ? 'active' : ''}`}to="/new-project/">New project +</Link>
          : <Link className={`${location.pathname === '/login/' ? 'active' : ''}`} to="/login/">Login</Link>

        }
      </nav>
      <div id="img-div">
        <img id="logo" src={"locally-logo.jpg"} alt="locally"/>
      </div>
    </div>
  )
}

export default Nav