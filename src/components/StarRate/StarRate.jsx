import styles from "./StarRate.module.scss";

export default function StarRate({ rating }) {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <i
            key={index}
            className={`fas fa-star ${
                index < rating ? "star-active" : "star-inactive"
            }`}
        ></i>
    ));

    return <div className={styles.starRating}>{stars}</div>;
}
