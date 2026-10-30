import Logo from "../common/Logo.jsx";
import Button from "../common/Button.jsx";
import styles from "../../styles/landingpage/Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav} aria-label="Main navigation">
            <Logo className={styles.navLogo} />

            <div className={styles.navContent}>
                <a href="#programmes">Programmes</a>
                <a href="#about">About JTAH</a>
                <a href="#partners">Partners</a>
                <a href="#faq">FAQ</a>

                <span>
                    <Button
                        wrapperClassName={styles.navButtonWrapper}
                        className={styles.navButton}
                        variant="white"
                        name="Sign in"
                    />
                    <Button
                        variant="primary"
                        wrapperClassName={styles.navButtonWrapper}
                        className={styles.navButton}
                        name="Join free"
                    />
                </span>
            </div>
        </nav>
    );
}
