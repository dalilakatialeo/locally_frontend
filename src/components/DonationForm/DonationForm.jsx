import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './DonationForm.css'

function DonationForm() {
    // const history = useHistory();
    // const [projectData, setProjectData] = useState();
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
                <div className="thank-you">
        <h3> Thank you for your support, it means the world!</h3>
        <p> Are you feeling generous?</p>
        <p><Link to="/">Donate to another project!</Link></p>

    </div>})
    };
    return (
        <div id="donation-form-container" className="form-container">
                <form id="donation-form" onSubmit={handleSubmit}>
                    <div>
                        <label>Donation Amount:</label>
                        <input
                        type="text" 
                        id="donation-amount" 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Comment:</label>
                        <textarea
                        type="textarea" 
                        id="comment" 
                        onChange={handleChange} />
                    </div>
                    <button className="submit-button" type="submit" onClick={handleSubmit}>Donate!</button>
                </form>
            </div >
    )
}

export default DonationForm;