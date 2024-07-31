import styles from "./StarRate.module.scss";

// composant StarRate qui prend en paramètre une note et affiche une note sous forme d'étoiles pleines ou vides en fonction de la note donnée en paramètre

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
