import { useId } from "react";
import Logo from "../../../components/Logo/Logo.jsx";
import Button from "../../../components/Button/Button.jsx";
import styles from "./AuthFormShell.module.css";

// Everything sign up and log in have in common: logo, title, Google button, divider, the <form>, footer link.
// The page-specific part (the fields and the submit button) is passed in as children.
export default function AuthFormShell({ title, subtitle, dividerText, footer, onSubmit, children }) {
    const titleId = useId();

    return (
        <section className={styles.shell} aria-labelledby={titleId}>
            <Logo />
            <h1 className={styles.title} id={titleId}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>

            <Button variant="secondary" fullWidth>Continue with Google</Button>

            <p className={styles.divider}>{dividerText}</p>

            <form className={styles.form} onSubmit={onSubmit}>
                {children}
            </form>

            <p className={styles.footer}>{footer}</p>
        </section>
    );
}
