import styles from "./StatCard.module.css";

export default function StatCard({ title, subtitle }) {
    return (
        <article className={styles.statCard}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
        </article>
    );
}
