import React, { useState, useEffect} from "react"
import { useParams, useHistory } from "react-router-dom";
import { oneProject } from "../data"

const ProjectPage = () => {
    const [projectData, setProjectData] = useState( { donations: []});
    const history = useHistory();
    const { id } = useParams();
//     const active = () => {
//         if 
//          (projectData?.is_open === "true") {
//             return `yes`
//     } 
//         else {
//         return `no`;
//     }
// }

const deleteFunction = async () => {
        // This is our API request, which we need to tell our function to wait for using the key word await
    await fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
          method: "delete",
          headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
          }
        })
        // Once we delete the project above, we then want to navigate back to the homepage
        // since the project we are looking at, doesn't exist anymore
        history.push('/')
      }


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            console.log(id)
            setProjectData(data);
        });
    }, );
    const formattedDate = new Date(projectData?.date_created).toDateString()
        console.log(formattedDate)
    // const deleteProject = async () => {
    //     await fetch (`${process.env.REACT_APP_API_URL}projects/${project_id}`, {
    //         method: "delete",
    //         headers: {
    //             "Authorization": `Token $`
    //         }
    //     })
    // }
    return (
        <div id="card">
            <h2>{projectData?.title}</h2>
            <h3>Location: {projectData?.location}</h3>
            <h3>Created on: {formattedDate}</h3>
            <h3>{projectData?.description}</h3>
            <h3>Goal: $ {projectData?.goal}.00</h3>
           
            <h4>Donations:</h4>
            <ul>{oneProject.donations.map((donationData, key) => {
                return (
                    <li> ${donationData.amount}: {donationData.comment}</li>);
            })}</ul>
             <h3>Raised so far: $ {projectData?.total_donated}.00</h3>

            <img alt="project" src= {projectData?.image}/>
            {/* <h3>{`Active: ${active()}`}</h3> */}
            
            {/* <button onClick={editFunction}>Edit Project</button> */}
            <button id="delete-button" className="submit-button" onClick={deleteFunction}>Delete Project</button>
        </div>
    )
}

export default ProjectPage

// date_created: "2020-03-21T00:28:23.382748+10:00"
// description: "Another project"
// goal: 1000
// id: 4
// image: "https://via.placeholder.com/300.jpg"
// is_open: true
// location: "STAFFORD"
// owner: 11
// title: "Project"

// const quickFunc = (someVar) => {
//     if(someVar && someVar.amount) {
//         // do stuff
//     }
// }