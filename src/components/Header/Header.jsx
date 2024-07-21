import { NavLink } from "react-router-dom";
import logoKasa from "../../assets/Logo-Kasa.png";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header
            className={`flex justify-content-between align-items-center ${styles.header}`}
        >
            <img src={logoKasa} alt="Logo de Kasa" />
            <ul>
                <NavLink end className="btn" to="/">
                    Accueil
                </NavLink>
                <NavLink className="btn" to="/about">
                    A Propos
                </NavLink>
            </ul>
        </header>
    );
}
