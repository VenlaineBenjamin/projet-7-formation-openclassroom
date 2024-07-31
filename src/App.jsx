import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// composant App qui affiche le header et le footer de l'application Kasa

export default function App() {
    return (
        <div className={styles.pageLayout}>
            <Header className={styles.header} />
            <Footer className={styles.footer} />
        </div>
    );
}
