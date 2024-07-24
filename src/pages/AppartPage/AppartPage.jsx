import Carrousel from "../../components/Carrousel/Carrousel";
import InfoCollapse from "../../components/InfoCollapse/InfoCollapse";
import StarRate from "../../components/StarRate/StarRate";
import { data } from "../../data/data";
import styles from "./AppartPage.module.scss";

export default function AppartPage() {
    const locationLink = window.location.pathname;

    return (
        <>
            {data.map((item) => {
                if (locationLink === `/${item.id}`) {
                    return (
                        <div
                            className={`flex flex-column ${styles.appartContainer}`}
                            key={item.id}
                        >
                            <Carrousel pictures={item.pictures} />
                            <div
                                className={`flex flex-row justify-content-between ${styles.appartComponents}`}
                            >
                                <div
                                    className={`flex flex-column ${styles.appartInfo}`}
                                >
                                    <h2 className={styles.appartTitle}>
                                        {item.title}
                                    </h2>
                                    <p className={styles.appartLocation}>
                                        {item.location}
                                    </p>
                                    {data.map((item) => {
                                        if (locationLink === `/${item.id}`) {
                                            return (
                                                <div
                                                    key={item.id}
                                                    className={`flex flex-row flex-wrap ${styles.appartTags}`}
                                                >
                                                    {item.tags.map((tag) => (
                                                        <p
                                                            key={tag}
                                                            className={
                                                                styles.appartTag
                                                            }
                                                        >
                                                            {tag}
                                                        </p>
                                                    ))}
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                                <div
                                    className={`flex flex-column align-items-center justify-content-between ${styles.appartUser}`}
                                >
                                    <div className="flex flex-row align-items-center">
                                        <p className={styles.appartUserName}>
                                            {item.host.name}
                                        </p>
                                        <img
                                            className={styles.appartUserPicture}
                                            src={item.host.picture}
                                            alt={item.host.name}
                                        />
                                    </div>
                                    <StarRate rating={item.rating} />
                                </div>
                            </div>
                            <div
                                className={`flex flex-row ${styles.collapseContainer}`}
                            >
                                <div
                                    className={`flex flex-column justify-content-start flex-fill ${styles.collapse}`}
                                >
                                    <InfoCollapse title="Description">
                                        {item.description}
                                    </InfoCollapse>
                                </div>
                                <div
                                    className={`flex flex-column justify-content-start flex-fill ${styles.collapse}`}
                                >
                                    <InfoCollapse title="Équipements">
                                        {item.equipments.map((equipment) => (
                                            <p key={equipment}>{equipment}</p>
                                        ))}
                                    </InfoCollapse>
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
}
