import { Link } from "react-router-dom"

function Project({ project }) {
  console.log(project)
  return (
    <div>
        <Link to={`/projects/${project?._id}`}>
            <img className="project-image" src={project?.screenshot} alt={project?.title} />
            <h1 className="project-title">{project.title}</h1>
        </Link>
    </div>
  )
}

export default Project;