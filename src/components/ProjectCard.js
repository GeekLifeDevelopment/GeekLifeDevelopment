import React from "react"
import { ProjectCardStyle } from "./styles/ProjectCardStyles"

const ProjectCard = props => {
  return (
    <ProjectCardStyle>
      <div id="overlay">
        <div className="overlay-content">
          <h1>Butcher & Barrel</h1>
          <p>
            Simple resturant website using Bootstrap, HTML5 and a little
            Javascript
          </p>
          <button>More...</button>
        </div>
      </div>
      <div id="card-container">
        <img src={props.image} alt="" />
      </div>
    </ProjectCardStyle>
  )
}

export default ProjectCard
