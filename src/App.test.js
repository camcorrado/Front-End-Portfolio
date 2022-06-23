import App from "./App";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import ProjectGallery from "./Components/ProjectGallery";
import ProjectCard from "./Components/ProjectCard";
import Projects from "./Components/Projects";
import ImageGallery from "./Components/ImageGallery";
import ImageCard from "./Components/ImageCard";
import Images from "./Components/Images";
import Footer from "./Components/Footer";

describe("Portfolio App Components", () => {
  it("renders the App without crashing", () => {
    render(<App />);
  });

  it("renders the Nav without crashing", () => {
    render(<Nav />);
  });

  it("renders the Hero without crashing", () => {
    render(<Hero />);
  });

  it("renders the Projects Gallery without crashing", () => {
    render(<ProjectGallery />);
  });

  it("renders the Project Card without crashing", () => {
    render(<ProjectCard project={Projects[0]} />);
  });

  it("renders the Image Gallery without crashing", () => {
    render(<ImageGallery />);
  });

  it("renders the Image Card without crashing", () => {
    render(<ImageCard image={Images[0]} />);
  });

  it("renders the Footer without crashing", () => {
    render(<Footer />);
  });
});
