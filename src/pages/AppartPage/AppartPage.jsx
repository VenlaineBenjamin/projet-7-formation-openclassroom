import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import InfoCollapse from "../../components/InfoCollapse/InfoCollapse";
import StarRate from "../../components/StarRate/StarRate";
import { data } from "../../data/data";
import ErrorPage from "../ErrorPage/ErrorPage";
import styles from "./AppartPage.module.scss";

export default function AppartPage() {
    const { id } = useParams();
    console.log(id);
    const appart = data.find((appart) => appart.id === id);
    if (!appart) {
        return <ErrorPage />;
    }
    return (
        <>
            <div
                className={`flex flex-column ${styles.appartContainer}`}
                key={appart.id}
            >
                <Carrousel pictures={appart.pictures} />
                <div
                    className={`flex flex-row justify-content-between ${styles.appartComponents}`}
                >
                    <div className={`flex flex-column ${styles.appartInfo}`}>
                        <h2 className={styles.appartTitle}>{appart.title}</h2>
                        <p className={styles.appartLocation}>
                            {appart.location}
                        </p>

                        <div
                            key={appart.id}
                            className={`flex flex-row flex-wrap ${styles.appartTags}`}
                        >
                            {appart.tags.map((tag) => (
                                <p key={tag} className={styles.appartTag}>
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div
                        className={`flex flex-column align-items-center justify-content-between ${styles.appartUser}`}
                    >
                        <div className="flex flex-row align-items-center">
                            <p className={styles.appartUserName}>
                                {appart.host.name}
                            </p>
                            <img
                                className={styles.appartUserPicture}
                                src={appart.host.picture}
                                alt={appart.host.name}
                            />
                        </div>
                        <StarRate rating={appart.rating} />
                    </div>
                </div>
                <div className={`flex flex-row ${styles.collapseContainer}`}>
                    <div
                        className={`flex flex-column justify-content-start flex-fill ${styles.collapse}`}
                    >
                        <InfoCollapse title="Description">
                            {appart.description}
                        </InfoCollapse>
                    </div>
                    <div
                        className={`flex flex-column justify-content-start flex-fill ${styles.collapse}`}
                    >
                        <InfoCollapse title="Équipements">
                            {appart.equipments.map((equipment) => (
                                <p key={equipment}>{equipment}</p>
                            ))}
                        </InfoCollapse>
                    </div>
                </div>
            </div>
        </>
    );
}
