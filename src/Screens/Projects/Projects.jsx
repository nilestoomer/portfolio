import { useState, useEffect } from "react";
import { getProjects } from "../../Services/projects.js"
import Project from "../../Components/Project.jsx";
import './Projects.css'

function Projects() {
    const [projects, setProjects] = useState([])

    async function fetchProjects() {
        const allProjects = await getProjects()
        setProjects(allProjects)
    }

    useEffect(() => {
        fetchProjects()
    }, [])
    console.log(projects)
    return (
        <div className="projects">
            <h1 className="my-portfolio">My Portfilio</h1>
            <div className="projects-container snaps-inline">
                {
                    projects.map((project) => (
                        <Project project={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;