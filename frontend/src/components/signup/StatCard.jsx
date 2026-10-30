import styles from "../../styles/signup/StatCard.module.css";

export default function StatCard({ title, subtitle }) {
    return (
        <article className={styles.statCard}>
            <h3 className={styles.statTitle}>{title}</h3>
            <p className={styles.statSubtitle}>{subtitle}</p>
        </article>
    );
}
