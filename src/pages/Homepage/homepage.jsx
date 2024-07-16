import imgLandscape from "../../assets/IMGlandscape.jpg";
import HomeCard from "../../components/HomeCard/HomeCard";
import { data } from "../../data/data";
import styles from "./Homepage.module.scss";

export default function Homepage() {
    return (
        <div>
            <div className={`flex justify-content-center ${styles.banner}`}>
                <p>Chez vous, partout et ailleurs</p>
                <img src={imgLandscape} alt="image paysage" />
            </div>
            <div className={styles.cardContainer}>
                {data.map((item) => (
                    <HomeCard
                        key={item.id}
                        imgSource={item.cover}
                        altTitle={item.title}
                        cardTitle={item.title}
                    />
                ))}
            </div>
        </div>
    );
}
