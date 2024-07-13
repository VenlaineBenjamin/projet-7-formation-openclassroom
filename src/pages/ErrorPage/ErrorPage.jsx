import { ShieldAlert } from "lucide-react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>{error.status}</h1>
            <ShieldAlert color="red" />
            <p>{error.message || error.statusText}</p>
        </div>
    );
}
