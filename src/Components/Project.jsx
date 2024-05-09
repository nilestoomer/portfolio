import { Link } from "react-router-dom"
import './Project.css'

function Project({ project }) {
  console.log(project)
  return (
    <div className="media-element">
        <Link to={`/projects/${project?._id}`}>
            <img className="project-image" src={project?.screenshot} alt={project?.title} />
            <h1 className="project-title">{project.title}</h1>
        </Link>
    </div>
  )
}

export default Project;