import React, { useState, useEffect} from "react"
import { useParams } from "react-router-dom";
// import { oneProject } from "../data"

const ProjectPage = () => {
    const [projectData, setProjectData] = useState();
    const { id } = useParams();

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
    return (
        <div>
            <h2>{projectData?.title}</h2>
            <h3>Created at: {projectData?.date_created}</h3>
            <h3>{`Status: ${projectData?.is_open}`}</h3>
            <h3>Pledges:</h3>
            {/* <ul>
                {projectData.pledges.map((pledgeData, key) => {
                return (
                <li>
                    {pledgeData.amount} from {pledgeData.supporter}s
                </li>
                );})}
            </ul> */}
        </div>
    )
}

export default ProjectPage

// {
// 	"title": "Project one",
// 	"description": "The first project.",
//  "location": "Brisbane",
// 	"donation": 150,
// 	"image": "https://via.placeholder.com/300.jpg",
// 	"is_open": true,
// 	"date_created": "2020-03-20T14:28:23.382748Z"
// }