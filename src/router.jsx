import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About";
import AppartPage from "./pages/AppartPage/AppartPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Homepage from "./pages/Homepage/Homepage";

// création du router react-router-dom avec les routes de navigation vers les pages d'accueil, à propos, la page de l'appartement correspondant à l'id de l'appartement et la page d'erreur 404

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/appartement/:id",
                element: <AppartPage />,
            },
            {
                path: "/404",
                element: <ErrorPage />,
            },
        ],
    },
]);
