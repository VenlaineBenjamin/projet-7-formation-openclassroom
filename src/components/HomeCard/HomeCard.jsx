import styles from "./HomeCard.module.scss";

export default function HomeCard({ imgSource, altTitle, cardTitle }) {
    return (
        <div className={styles.card}>
            <img src={imgSource} alt={altTitle} />
            <h2>{cardTitle}</h2>
        </div>
    );
}
