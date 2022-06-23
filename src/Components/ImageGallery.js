import React, { Component } from "react";
import ImageCard from "./ImageCard";
import Images from "./Images";

export default class ImageGallery extends Component {
  state = {
    images: Images,
  };

  componentDidMount() {
    let array = this.state.images;
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({ images: array });
  }

  render() {
    return (
      <section className="imageGallery">
        <h1>
          Get to <span>K</span>now <span>M</span>e
        </h1>
        <section className="imagesContainer">
          {this.state.images
            .map((image) => (
              <li key={image.alt} className="image">
                <ImageCard image={image} />
              </li>
            ))
            .sort()}
        </section>
      </section>
    );
  }
}
