import Icon from "../../../components/Icon/Icon.jsx";
import styles from "./ProgrammeCard.module.css";

export default function ProgrammeCard({ icon, title, description }) {
    return (
        <article className={styles.card}>
            <Icon src={icon} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{description}</p>
        </article>
    );
}
