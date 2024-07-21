import aboutBanner from "../../../public/kalen-emsley-Bkci_8qcdvQ-unsplash 2aboutLandscape.jpg";
import styles from "./About.module.scss";

export default function About() {
    return (
        <div>
            <div className={styles.banner}>
                <img src={aboutBanner} alt="about banner" />
            </div>
        </div>
    );
}
