import ProjectForm from "../Project/ProjectForm";
import styles from "./NewProject.module.css";

const NewProject = () => {
  return ( 
    <div className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto e adicione serviços</p>
      <ProjectForm btnText="Criar Projeto" /> 
    </div>
   );
}
 
export default NewProject;

// 
 