import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

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
