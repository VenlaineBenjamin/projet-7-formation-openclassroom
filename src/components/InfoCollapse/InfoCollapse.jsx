import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import styles from "./InfoCollapse.module.scss";

// composant InfoCollapse qui prend en paramètre un titre et des enfants pour afficher un titre cliquable qui affiche ou masque les enfants

export default function InfoCollapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <h2
                className={`flex justify-content-between align-items-center ${styles.InfoCollapseTitle}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <div>
                    {isOpen ? (
                        <ChevronUp size={40} />
                    ) : (
                        <ChevronDown size={40} />
                    )}
                </div>
            </h2>
            {isOpen && (
                <div className={styles.InfoCollapseContent}>{children}</div>
            )}
        </>
    );
}
