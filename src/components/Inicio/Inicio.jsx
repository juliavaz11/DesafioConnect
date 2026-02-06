import ImgInicial from "../../assets/imgInicial.png"
import styles from "../Inicio/Inicio.module.scss"

function Inicio(){
    return(
        <section className={styles.principal}>
            <div>
                <h1>Projetos Sociais que transformam</h1>
                <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade</p>
            </div>
        <img className={styles.ImgInicial} src={ImgInicial} alt="Mão simbolizando projetos sociais" />
        </section>
    )
}
export default Inicio