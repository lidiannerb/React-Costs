import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

const LinkButton = ({to, text}) => {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  );
}
 
export default LinkButton;

// o to é dinamico (vem da props) pois é baseado em pra onde vai dependendo de onde o usuário clicar
//O text é dinamico (vem da props) pois é baseado em onde iremos utilizar o LinkButton 
// O LinkButton foi importado primeiro na page Home
