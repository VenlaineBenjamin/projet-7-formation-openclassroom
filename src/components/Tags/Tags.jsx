import styles from "./Tags.module.scss";

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
