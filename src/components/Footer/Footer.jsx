import logoHouse from "../../assets/GroupHouse.png";
import letterA from "../../assets/VectorA.png";
import letterK from "../../assets/VectorK.png";
import letterS from "../../assets/VectorS.png";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer
            className={`flex flex-column justify-content-center align-items-center ${styles.footer}`}
        >
            <div className={`flex ${styles.footerLogo}`}>
                <img src={letterK} alt="letter K" />
                <img src={logoHouse} alt="logo house" />
                <img src={letterS} alt="letter S" />
                <img src={letterA} alt="letter A" />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
