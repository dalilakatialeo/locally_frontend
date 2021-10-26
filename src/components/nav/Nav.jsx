// npm modules from https://npm.js.com/
import React from "react"
import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login/">Login</Link>
        <Link to="/new-project/">Create new project</Link>
      </nav>
      <img id="logo" src={"locally-logo.jpg"} alt="locally"/>
    </div>
  )
}

export default Nav