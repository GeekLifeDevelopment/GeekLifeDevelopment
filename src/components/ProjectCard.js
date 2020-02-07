import React from "react"
import { ProjectCardStyle } from "./styles/ProjectCardStyles"

const ProjectCard = props => {
  return (
    <ProjectCardStyle>
      <div id="overlay"></div>
      <div id="card-container">
        <img src={props.image} alt="" />
      </div>
    </ProjectCardStyle>
  )
}

export default ProjectCard
