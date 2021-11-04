import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import NewProjectForm from "../components/NewProjectForm/NewProjectForm"

function NewProjectPage() {
    const [token, setToken] = useState(window.localStorage.getItem('token'))
    useEffect(() => {
        setToken(window.localStorage.getItem('token'))
    }, [])
    return token !== "null" 
    ? <NewProjectForm /> 
    : (<div className="unauthorised">
        <h3> What are you doing here?</h3>
        <p> You need to join our community to create a new project!</p>
        <p><Link to="/sign-up/">SIGN UP HERE!</Link></p>

    </div>)

}

export default NewProjectPage;