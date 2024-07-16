import { Link, useRouteError } from "react-router-dom";
import stylesApp from "../../App.module.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./ErrorPage.module.scss";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className={stylesApp.pageLayout}>
            <Header />
            <div
                className={`flex flex-column justify-content-evenly align-items-center ${styles.errorContainer}`}
            >
                <h2>{error.status}</h2>
                <p>Oups! La page que vous demandez n&apos;existe pas.</p>
                <Link className="btn" to="/">
                    Retourner sur la page d’accueil
                </Link>
            </div>
            <Footer />
        </div>
    );
}
