import React, { Component } from "react";
import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <section className="buttons">
          <ul className="navLinks">
            <li className="gmail">
              <a href="mailto:camcorrado@gmail.com" aria-label="send email">
                <FontAwesomeIcon icon={faEnvelope} className="faIcon" />
              </a>
            </li>
            <li className="github">
              <a
                href="https://github.com/camcorrado"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github profile"
              >
                <FontAwesomeIcon icon={faGithub} className="faIcon" />
              </a>
            </li>
            <li>
              {this.state}
              <a
                href="https://camcorradoportfolio.s3.amazonaws.com/Cameron+Corrado's+Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="view resume"
              >
                <FontAwesomeIcon icon={faGraduationCap} className="faIcon" />
              </a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}
