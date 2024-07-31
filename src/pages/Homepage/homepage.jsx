import { Link } from "react-router-dom";
import imgLandscape from "../../assets/IMGlandscape.jpg";
import HomeCard from "../../components/HomeCard/HomeCard";
import { data } from "../../data/data";
import styles from "./Homepage.module.scss";

// composant Homepage qui affiche une bannière et une liste d'appartements avec un lien de navigation react-router-dom vers la page de l'appartement correspondant à l'id de l'appartement

export default function Homepage() {
    return (
        <div>
            <div className={`flex justify-content-center ${styles.banner}`}>
                <p>Chez vous, partout et ailleurs</p>
                <img src={imgLandscape} alt="image paysage" />
            </div>
            <div className={styles.cardContainer}>
                {data.map((item) => (
                    <Link to={`/appartement/${item.id}`} key={item.id}>
                        <HomeCard
                            imgSource={item.cover}
                            altTitle={item.title}
                            cardTitle={item.title}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
