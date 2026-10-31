import BrandSide from "../../features/auth/BrandSide/BrandSide.jsx";
import styles from "./AuthLayout.module.css";

// Sign up and log in share this: the form on one side, the purple brand panel on the other.
// On phones and tablets the brand panel is hidden (see BrandSide.module.css), matching the Figma mobile design.
export default function AuthLayout({ children }) {
    return (
        <main className={styles.auth}>
            <div className={styles.formSide}>
                <div className={styles.formInner}>{children}</div>
            </div>
            <BrandSide />
        </main>
    );
}
