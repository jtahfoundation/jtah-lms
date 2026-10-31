import Logo from "../../components/Logo/Logo.jsx";
import styles from "./CenteredLayout.module.css";

// A single centred column with the logo on top. Used by the verify-email page,
// and ready for forgot-password / reset-password pages later.
export default function CenteredLayout({ children }) {
    return (
        <main className={styles.page}>
            <header className={styles.header}>
                <Logo size="sm" />
            </header>
            <div className={styles.content}>{children}</div>
        </main>
    );
}
