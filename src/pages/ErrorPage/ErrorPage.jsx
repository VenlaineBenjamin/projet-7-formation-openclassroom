import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

// composant ErrorPage qui affiche un message d'erreur 404 et un bouton pour retourner sur la page d'accueil avec un lien de navigation react-router-dom vers la page d'accueil

export default function ErrorPage() {
    return (
        <div
            className={`flex flex-column justify-content-evenly align-items-center ${styles.errorContainer}`}
        >
            <h2>404</h2>
            <p>Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link className="btn" to="/">
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
}
