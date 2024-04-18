import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getProject } from "../../Services/projects.js"

export default function ProjectDetail() {
    const [project, setProject] = useState({})

    const { id } = useParams()

    async function fetchProject() {
        const projectData = await getProject(id)
        setProject(projectData)
    }

    useEffect(() => {
        fetchProject()
    }, [])

  return (
    <div className='project-detail'>
        <h1 className='project-detail-title'>{project.title}</h1>
        <img className='project-detail-screenshot' src={project.screenshot} />
        <p className='project-detail-description'>{project.description}</p>
        <a className='project-detail-github' href={project.github}>Checkout the Repository on Github</a>
        <p className='project-detail-languages'>{project.languages}</p>
        <p className='project-detail-frameworks'>{project.frameworks}</p>
    </div>
  )
}