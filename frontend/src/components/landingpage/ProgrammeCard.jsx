import styles from "../../styles/landingpage/ProgrammeCard.module.css";
import SvgIcon from "./SvgIcon.jsx";

export default function ProgrammeCard({ iconLink, title, subtitle }) {
    return (
        <article className={styles.card}>
            <SvgIcon src={iconLink} />
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </article>
    );
}
