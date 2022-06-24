import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <section className="headShotContainer">
          <img
            alt="Cam Corrado Headshot"
            className="mainHeadShot"
            src="https://i.imgur.com/IfBKMtP.jpg"
          />
        </section>
        <section className="greeting">
          <h1>
            Hiya, <span>I</span>'m <span>C</span>ameron
          </h1>
          <p>
            a <span>Front-End Developer</span> with a background in{" "}
            <span>New Media</span>.
          </p>
        </section>
        <section className="bio">
          <p>
            In addition to&nbsp;
            <span>
              React, JavaScript, PostgreSQL, jQuery, HTML, CSS,&nbsp;
              <a
                href="https://camcorradoportfolio.s3.amazonaws.com/Cameron+Corrado's+Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                etc.
              </a>
            </span>
            , I bring a lot of relevant skills to the table from my previous
            career as a Senior Video Editor - attention to detail, a knack for
            problem solving, project &amp; time management, &amp; adaptive
            learning in a field of ever...advancing...technology...
          </p>
          <p>
            When I'm not coding, I'm often found gardening with my cat Catkeisha
            in our rooftop garden, kickin' butts in online PvP video games, or
            searching for vintage Halloween decor.
          </p>
        </section>
      </section>
    );
  }
}
