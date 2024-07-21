import { data } from "../../data/data";
import Carrousel from "../../components/Carrousel/Carrousel";

export default function AppartPage() {
    const locationLink = window.location.pathname;

    return (
        <>
            {data.map((item) => {
                if (locationLink === `/${item.id}`) {
                    return (
                        <div className="flex flex-column" key={item.id}>
                            <Carrousel pictures={item.pictures} />
                            <h1 className="text-center">{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    );
                }
            })}
        </>
    );
}
