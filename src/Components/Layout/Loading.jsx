import loading from "../../img/loading.svg"  //esse tipo de importação de imagem é poassível pelo web pack e React

import styles from "./Loading.module.css"

const Loading = () => {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading} alt="Loading" />
    </div>
  );
}
 
export default Loading;