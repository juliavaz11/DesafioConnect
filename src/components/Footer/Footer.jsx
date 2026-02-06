import styles from "../Footer/Footer.module.scss"
import ImgLogo from "../../assets/logo.png"
import ImgInsta from "../../assets/instagram.png"
import ImgLinkedin from "../../assets/linkedin.png"
import ImgWpp from "../../assets/whatsapp.png"


function Footer(){
    return(
       <footer>
        <div className={styles.footer}>
        <img className={styles.logo}src={ImgLogo} alt="Logo da Connect" />
        <h2>Connect</h2>
       
        </div>
         <p className={styles.textoFooter}>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>
         <div className={styles.redesSociais}>
            <img src={ImgInsta} alt="" />
            <img src={ImgLinkedin} alt="" />
            <img src={ImgWpp} alt="" />

         </div>
       </footer>
    )
}
export default Footer