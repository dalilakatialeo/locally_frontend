// npm modules from https://npm.js.com/
import React from "react"
import { Link } from "react-router-dom"
// import LoginForm from "../LoginForm/LoginForm"
import "./Nav.css"


// something to handle authentication and only show new project + if user is logged in

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login/">Login</Link>
        <Link to="/new-project/">New project +</Link>
      </nav>
      <div id="img-div">
        <img id="logo" src={"locally-logo.jpg"} alt="locally"/>
      </div>
    </div>
  )
}

export default Nav