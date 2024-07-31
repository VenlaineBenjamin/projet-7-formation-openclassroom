import aboutBanner from "../../../public/kalen-emsley-Bkci_8qcdvQ-unsplash 2aboutLandscape.jpg";
import Collapse from "../../components/Collapse/Collapse";
import styles from "./About.module.scss";

// composant About qui affiche une bannière et des informations sur la fiabilité, le respect, le service et la sécurité de Kasa, utilisant le composant Collapse pour afficher les informations

export default function About() {
    return (
        <div>
            <div className={styles.banner}>
                <img src={aboutBanner} alt="about banner" />
            </div>
            <Collapse description="Fiabilité">
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité
                    totale. Les photos sont conformes aux logements, et toutes
                    les informations sont régulièrement vérifiées par nos
                    équipes.
                </p>
            </Collapse>
            <Collapse description="Respect">
                <p>
                    La bienveillance fait partie des valeurs fondatrices de
                    Kasa. Tout comportement discriminatoire ou de perturbation
                    du voisinage entraînera une exclusion de notre plateforme.
                </p>
            </Collapse>
            <Collapse description="Service">
                <p>
                    La bienveillance fait partie des valeurs fondatrices de
                    Kasa. Tout comportement discriminatoire ou de perturbation
                    du voisinage entraînera une exclusion de notre plateforme.
                </p>
            </Collapse>
            <Collapse description="Sécurité">
                <p>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos
                    hôtes que pour les voyageurs, chaque logement correspond aux
                    critères de sécurité établis par nos services. En laissant
                    une note aussi bien à l&apos;hôte qu&apos;au locataire, cela
                    permet à nos équipes de vérifier que les standards sont bien
                    respectés. Nous organisons également des ateliers sur la
                    sécurité domestique pour nos hôtes.
                </p>
            </Collapse>
        </div>
    );
}
