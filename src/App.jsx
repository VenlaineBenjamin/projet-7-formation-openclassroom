import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function App() {
    return (
        <div className={styles.pageLayout}>
            <Header className={styles.header} />
            <Footer className={styles.footer} />
        </div>
    );
}
