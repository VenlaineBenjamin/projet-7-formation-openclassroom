import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About";
import AppartPage from "./pages/AppartPage/AppartPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Homepage from "./pages/Homepage/Homepage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
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
