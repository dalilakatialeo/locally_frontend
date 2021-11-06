import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function DonationForm() {
    const history = useHistory();
    const [projectData, setProjectData] = useState();
    const [userInfo, setUser] = useState({});
    const handleChange = (event) => {
        let { id, value } = event.target;
        setUser((prevProject) => {
            return {
                ...prevProject,
                [id]: value,
            };
        });
    };
    const postData = () => {
        return fetch(`${process.env.REACT_APP_API_URL}users/`,
            {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userInfo),
            }).then(i => i.json());
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
            .then((response) => {
                console.log('------response from my API --------')
                history.push("/thank-you");
            })
    };
    return (
        <div id="signup-form-container" className="form-container">
                {/* <p className="pagetitle--register" align="center">Create your account</p> */}
                <form id="signup-form" onSubmit={handleSubmit}>
                    <div>
                        <label>Donation Amount:</label>
                        <input
                        type="text" 
                        id="donation-amount" 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea
                        type="text" 
                        id="comment:" 
                        onChange={handleChange} />
                    </div>
                    <button className="submit-button" type="submit" onClick={handleSubmit}>Donate!</button>
                </form>
            </div >
    )
}

export default DonationForm;