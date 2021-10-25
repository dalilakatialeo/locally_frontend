import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

// These are our components

import NavigationComponent from "./components/nav/Nav.jsx"

// These are our pages

import Home from './pages/HomePage.jsx'
import Projects from "./pages/ProjectPage.jsx"
import Login from "./pages/LoginPage"
import NewProjectPage from "./pages/NewProjectPage"

const App = () => {
  return (
    <div>
      <Router>
        {/* we define our links inside here. This is how we change pages */}
        <NavigationComponent />
        {/* When our route changes in the url, we then render the correct page */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project/:id">
            <Projects />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/new-project">
            <NewProjectPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App