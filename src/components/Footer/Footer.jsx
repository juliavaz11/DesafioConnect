import styles from "../Footer/Footer.module.scss"
import ImgLogo from "../../assets/logo.png"
import ImgInsta from "../../assets/instagram.png"
import ImgLinkedin from "../../assets/linkedin.png"
import ImgWpp from "../../assets/whatsapp.png"


function Footer(){
    return(
       <footer>
        <div className={styles.conteudoFooter}>
        <img className={styles.logo}src={ImgLogo} alt="Logo da Connect" />
        <h2>Connect</h2>
       
        </div>
         <p className={styles.textoFooter}>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>
         <nav className={styles.redesSociais}>
            <img src={ImgInsta} alt="ícone do Instagram" />
            <img src={ImgLinkedin} alt="Ícone do Linkedin" />
            <img src={ImgWpp} alt="Ícone no WhatsApp" />

         </nav>
       </footer>
    )
}
export default Footer