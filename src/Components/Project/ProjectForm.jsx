import { useEffect, useState } from "react";

import Input from "../Form/Input";
import Select from "../Form/Select";
import SubmitButton from "../Form/SubmitButton";
import styles from "./ProjectForm.module.css";

const ProjectForm = ({ btnText, projectData }) => {
  // handleSubmit
  const [categories, setCategories] = useState([]);

  // quando um projeto é enviado para edição, passa-se pela página pai, entao precisa saber se os dados 
  // vem, para iniciar eles ou não, por isso a const project recebe os dados do projeto ou um objeto vazio
  
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application=json"
      },
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((erro) => console.log(erro))
  },[])


  const submit = (e) => {
    e.preventDefault()
    console.log(project);
    // handleSubmit(project)
  }
  //handleChange é um método dinamico que vai alterar o valor de todo input 
  // vamos usar a mesma coisa para alterar a categoria, mudando o tipo de eventi
  const handleChange = (e) => {
    setProject({ ...project, [e.target.name] : e.target.value })
  }

  // Aqui estamos inserindo um objeto dentro de um objeto
  const handleSelect = (e) => {
    setProject({ 
      ...project, 
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
   })

  }

  // onSubmit é um evento do React, que no caso abaixo está enviando os dados do projeto para o servidor

  return (
    <form onSubmit={submit} className={styles.form}> 
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o valor do orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />
      <Select 
        name="categoty_id" 
        text="Selecione a categoria" 
        options={categories}
        handleOnChange={handleSelect}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={btnText}/>
    </form>
  );
};

export default ProjectForm;


// O SubmitButton tem o texto dinamico, que é a prop btnText que está sendo passada 
// do componente pai (ProjectForm)
// Essa propriedade está sendo usada na page NewProject, pois é lá que este botão está sendo usado para 
// criar um novo projeto, então o texto só faz sentido lá na page NewProject
 
