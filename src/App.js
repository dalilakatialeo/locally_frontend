import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// These are our components

import NavigationComponent from "./components/Nav.jsx"

// These are our pages

import Home from './pages/HomePage.jsx'
import Projects from "./pages/ProjectPage.jsx"

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
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App