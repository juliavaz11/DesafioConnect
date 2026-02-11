import ImgPerfil from "../../assets/fotologin.png";
import styles from "./Perfil.module.scss";

function Perfil() {
  return (
    <section className={styles.containerTelaPerfil}>
      <article>
        <img src={ImgPerfil} alt="Imagem do usuário" />
        
        <div className={styles.cardInfo}>
          <h2>Julia Vaz</h2>
          <h3>Voluntária Ativa</h3>
          <p className={styles.sobreMim}>
            Apaixonada por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <address>
            <p>Estância Velha, RS</p>
            <p>julia@email.com</p>
            <p>Membro desde Janeiro de 2022</p>
          </address>

          <ul className={styles.listaInteresses}>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>

        </div>
      </article>
    </section>
  );
}
export default Perfil;
