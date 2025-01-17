import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiSass,
  DiGit,
  DiGithubBadge,
  DiMongodb,

  
 
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJavascript /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "git", name: "Git", icon: <DiGit /> },
  { id: "github", name: "GitHub", icon: <DiGithubBadge /> },
  { id: "mongodb", name: "Mongodb", icon: <DiMongodb /> },

  

  
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            
            <div className="html5">
              <h3>{tech.name}</h3>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
