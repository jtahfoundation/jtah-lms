import Button from "../../../components/Button/Button.jsx";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
    return (
        <section className={styles.cta}>
            <h2 className={styles.title}>
                Ready to begin? Create your free account in two minutes.
            </h2>
            <Button to="/signup" className={styles.button}>Join free</Button>
        </section>
    );
}
