import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../Layout/Message";
import Container from "../Layout/Container";
import Loading from "../Layout/Loading";
import LinkButton from "../Layout/LinkButton";
import ProjectCard from "../Project/ProjectCard";

import styles from "./Projects.module.css";

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)

  const location = useLocation()
  let message = ""
  if (location.state) {
    message = location.state.message
  }  

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(resposta => resposta.json())
      .then(data => {
        console.log(data)
        setProjects(data)
        setRemoveLoading(true)
      })
      .catch((erro) => console.log(erro))
  }, [])

  return ( 
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/NewProject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => 
          <ProjectCard 
            id={project.id}
            key={project.id}
            name={project.name}
            budget={project.budget}
            category={project.category.name}
          />
          )        
        }
        {!removeLoading && <Loading/>}
      </Container>
    </div>
  );
}
 
export default Projects;