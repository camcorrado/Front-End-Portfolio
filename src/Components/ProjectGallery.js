import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";

export default class ProjectGallery extends Component {
  render() {
    return (
      <section className="projectGallery">
        <h1>Projects</h1>
        <section className="projectsContainer">
          {Projects.map((project) => (
            <li key={project.name} className="project">
              <ProjectCard project={project} />
            </li>
          ))}
        </section>
      </section>
    );
  }
}
