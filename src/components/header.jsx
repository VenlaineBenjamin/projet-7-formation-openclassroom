import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Kasa</h1>
            <ul>
                <Link to="/">Homepage</Link>
                <Link to="/about">About</Link>
            </ul>
        </header>
    );
}
