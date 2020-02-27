import React from "react"
import { ProjectCardStyle } from "./styles/ProjectCardStyles"
import { Link } from "gatsby"

const ProjectCard = props => {
  return (
    <ProjectCardStyle>
      <div id="overlay">
        <div className="overlay-content">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <a href={props.link} target="_blank">
            <button>View Site</button>
          </a>
        </div>
      </div>
      <div id="card-container">
        <img src={props.image} alt="" />
      </div>
    </ProjectCardStyle>
  )
}

export default ProjectCard
