import styles from "./StarRate.module.scss";

export default function StarRate({ rating }) {
    return (
        <>
            {rating === "1" ? (
                <div className={styles.starRating}>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-inactive"></i>
                    <i className="fas fa-star star-inactive"></i>
                    <i className="fas fa-star star-inactive"></i>
                    <i className="fas fa-star star-inactive"></i>
                </div>
            ) : rating === "2" ? (
                <div className={styles.starRating}>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-inactive"></i>
                    <i className="fas fa-star star-inactive"></i>
                    <i className="fas fa-star star-inactive"></i>
                </div>
            ) : rating === "3" ? (
                <div className={styles.starRating}>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-inactive"></i>
                    <i className="fas fa-star star-inactive"></i>
                </div>
            ) : rating === "4" ? (
                <div className={styles.starRating}>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-inactive"></i>
                </div>
            ) : rating === "5" ? (
                <div className={styles.starRating}>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-active"></i>
                    <i className="fas fa-star star-active"></i>
                </div>
            ) : null}
        </>
    );
}
