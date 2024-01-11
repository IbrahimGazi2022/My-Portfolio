import SliderComp from "./SliderComp";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <div className="container" id="project">
        <div className="project">
          <h1>
            Recent <span className="green">Projects</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            iusto. Adipisci in qui officia provident tenetur sequi, deserunt
            corporis quos?
          </p>
        </div>
        <SliderComp />
      </div>
    </>
  );
};

export default Projects;
