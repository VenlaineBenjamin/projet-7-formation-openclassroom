import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function App() {
    return (
        <div className={styles.pageLayout}>
            <Header className={styles.header} />
            <Outlet className={styles.main} />
            <Footer className={styles.footer} />
        </div>
    );
}
