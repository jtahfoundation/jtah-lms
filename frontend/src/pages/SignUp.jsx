import FormField from "../components/signup/FormField.jsx";
import BrandSide from "../components/signup/BrandSide.jsx";
import styles from "../styles/signup/SignUp.module.css";

export default function SignUp() {
    return (
        <main className={styles.signUp}>
            <FormField />
            <BrandSide />
        </main>
    );
}
