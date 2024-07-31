import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import AppartPage from "./pages/AppartPage/AppartPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Homepage from "./pages/Homepage/Homepage";
import "./styles/index.scss";

// composant App qui affiche le header et le footer de l'application Kasa avec les routes de navigation react-router-dom vers les pages d'accueil, à propos, la page de l'appartement correspondant à l'id de l'appartement et la page d'erreur 404

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <div className={styles.pageLayout}>
                <Header className={styles.header} />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/appartement/:id" element={<AppartPage />} />
                    <Route path="/404" element={<ErrorPage />} />
                </Routes>
                <Footer className={styles.footer} />
            </div>
        </Router>
    </React.StrictMode>
);
