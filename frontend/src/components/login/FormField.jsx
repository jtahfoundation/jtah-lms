import Input from "../signup/Input.jsx";
import Logo from "../common/Logo.jsx";
import styles from "../../styles/signup/FormField.module.css";
import Button from "../common/Button.jsx";

export default function FormField() {
    return (
        <section className={styles.formField} aria-labelledby="signup-title">
            <Logo />
            <h1 className={styles.title} id="signup-title">Log into your account</h1>
            <p className={styles.subTitle}>
                Learn at your own pace. Free for women and girls of every age.
            </p>

            <Button variant="white" name="Continue with Google" />

            <p className={styles.dividerText}>or log in with email</p>

            <form onSubmit={(event) => event.preventDefault()}>
                <Input
                    rep="Email address"
                    name="email"
                    placeholder="e.g. you@example.com"
                    type="email"
                    autoComplete="email"
                />
                <Input
                    rep="Password"
                    name="password"
                    placeholder="At least 8 characters"
                    type="password"
                    autoComplete="new-password"
                />
                <Button variant="primary" name="Log in" type="submit" />
            </form>

            <p className={styles.optional}>
                Do not have an account? <a href="#signup">Sign up</a>
            </p>
        </section>
    );
}
