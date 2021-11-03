import React, { useState, useEffect} from "react"
import { useParams } from "react-router-dom";
// import { oneProject } from "../data"

const ProjectPage = () => {
    const [projectData, setProjectData] = useState();
    const { id } = useParams();
    const active = () => {
        if 
         (projectData?.is_open === "true") {
            return `yes`
    } 
        else {
        return `no`;
    }
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
    }, []);
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
        <div>
            <h2>{projectData?.title}</h2>
            <h3>Created: {formattedDate}</h3>
            <h3>{projectData?.description}</h3>
            <h3>{projectData?.location}</h3>
            <h3>Goal: $ {projectData?.goal}.00</h3>
            <img src= {projectData?.image}/>
            {/* <h3>{`Active: ${active()}`}</h3> */}
            
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