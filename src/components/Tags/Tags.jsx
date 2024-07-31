import styles from "./Tags.module.scss";

// composant Tags qui prend en paramètre un tableau de tags et affiche les tags sous forme de liste

export default function Tags({ tags }) {
    return (
        <div className={`flex flex-row flex-wrap ${styles.appartTags}`}>
            {tags.map((tag) => (
                <p key={tag} className={styles.appartTag}>
                    {tag}
                </p>
            ))}
        </div>
    );
}
