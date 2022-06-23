import React, { Component } from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import ProjectGallery from "./Components/ProjectGallery";
import ImageGallery from "./Components/ImageGallery";
import Footer from "./Components/Footer";
import "./fonts/Amiri-Regular.ttf";
import "./fonts/CinzelDecorative-Regular.ttf";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Nav />
        <Hero />
        <ProjectGallery />
        <ImageGallery />
        <Footer />
      </main>
    );
  }
}

export default App;
