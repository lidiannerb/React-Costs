// import { useHistory } from "react-router-dom";
import ProjectForm from "../Project/ProjectForm";
import styles from "./NewProject.module.css";

const NewProject = () => {
  // const history = useHistory(); 

  //quando o usuário clicar em post será redirecionado para outra página

  const createPost = (project) => {
  // inicilizando cost and services. Caso houvesse um backend com sistema real, esses dados ficariam lá
    project.cost = 0;
    project.service = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application-json",
      },
      body: JSON.stringify(project) //aqui estamos enviando os dados pro servidor como string, lá no array projects
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        console.log(data);
  //depois faremos o redirect
      })
      .catch((erro) => console.log(erro));
  };

  return (
    <div className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto e adicione serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
};

export default NewProject;

// NewProject é pai de ProjectForm
// o método da página de edição vai estar aqui no componente pai
// o método da página de criação do post vai estar aqui
// o ProjectForm vai receber os métodos por props


// handleSubmit foi passada em ProjectForm por props