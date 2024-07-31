import { Link, NavLink } from "react-router-dom";
import logoKasa from "../../assets/Logo-Kasa.png";
import styles from "./Header.module.scss";

// composant header qui affiche le logo de Kasa et les liens vers la page d'accueil et la page à propos avec des liens de navigation react-router-dom

export default function Header() {
    return (
        <header
            className={`flex justify-content-between align-items-center ${styles.header}`}
        >
            <Link to="/">
                <img src={logoKasa} alt="Logo de Kasa" />
            </Link>
            <ul className="flex">
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
