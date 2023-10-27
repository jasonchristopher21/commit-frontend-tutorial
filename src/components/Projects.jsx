import { projects } from "../constants";
import "../styles.css";

export default function Projects() {
  return (
    <div className="container-wrapper">
      <div>
        <h1>My Projects</h1>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
