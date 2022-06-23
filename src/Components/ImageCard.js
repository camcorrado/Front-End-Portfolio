import React, { Component } from "react";

export default class ImageCard extends Component {
  render() {
    const { image, alt, description } = this.props.image;
    return (
      <section className="imageCard">
        <img src={image} alt={alt} className="imageActual" />
        <div className="imageDetails">
          <p>{description}</p>
        </div>
      </section>
    );
  }
}
