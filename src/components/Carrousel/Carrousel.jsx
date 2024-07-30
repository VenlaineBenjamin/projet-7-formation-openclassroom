import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import styles from "./Carrousel.module.scss";

export default function Carrousel({ pictures, altPicture }) {
    const [currentPicture, setCurrentPicture] = useState(0);

    const nextPicture = () => {
        if (currentPicture === pictures.length - 1) {
            setCurrentPicture(0);
        } else {
            setCurrentPicture(currentPicture + 1);
        }
    };

    const previousPicture = () => {
        if (currentPicture === 0) {
            setCurrentPicture(pictures.length - 1);
        } else {
            setCurrentPicture(currentPicture - 1);
        }
    };

    return (
        <div className={styles.pictureFrame}>
            {pictures.map((picture, i) => (
                <img
                    key={i}
                    src={picture}
                    alt={altPicture}
                    className={styles.picture}
                    style={{ display: i === currentPicture ? "block" : "none" }}
                />
            ))}
            <div className={styles.chevron}>
                <div onClick={previousPicture}>
                    <ChevronLeft className={styles.left} />
                </div>
                <div onClick={nextPicture}>
                    <ChevronRight className={styles.right} />
                </div>
            </div>
            <div className={styles.counter}>
                {currentPicture + 1}/{pictures.length}
            </div>
        </div>
    );
}
