import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import styles from "./Carrousel.module.scss";

export default function Carrousel({ pictures }) {
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
                    alt="picture"
                    className={styles.picture}
                    style={{ display: i === currentPicture ? "block" : "none" }}
                />
            ))}
            <div className={styles.chevron}>
                <div onClick={previousPicture}>
                    <ChevronLeft className={styles.left} size={100} />
                </div>
                <div onClick={nextPicture}>
                    <ChevronRight className={styles.right} size={100} />
                </div>
            </div>
            <div className={styles.counter}>
                {currentPicture + 1}/{pictures.length}
            </div>
        </div>
    );
}
