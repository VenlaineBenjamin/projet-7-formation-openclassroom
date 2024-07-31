import styles from "./HomeCard.module.scss";

// composant HomeCard qui prend en paramètre une image en paramètre, un titre alternatif et un titre de carte

export default function HomeCard({ imgSource, altTitle, cardTitle }) {
    return (
        <div className={styles.card}>
            <img src={imgSource} alt={altTitle} />
            <h2>{cardTitle}</h2>
        </div>
    );
}
