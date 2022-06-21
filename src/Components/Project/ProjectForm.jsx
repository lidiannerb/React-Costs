const ProjectForm = () => {
  return (
    <form>
      <div>
        <input type="text" placeholder="Digite o nome do projeto" />
      </div>
      <div>
        <input type="number" placeholder="Insira o valor do orçamento total" />
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>
            Selecione a categoria
          </option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </form>
  );
};

export default ProjectForm;

// Este componente foi importando na page NewProject