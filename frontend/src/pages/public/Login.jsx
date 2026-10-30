import FormField from "../../components/login/FormField.jsx";
import BrandSide from "../../components/signup/BrandSide.jsx";
import styles from "../../styles/signup/SignUp.module.css"
export default function Login(){
    return (
        <main className={styles.signUp}>
            <FormField/>
            <BrandSide/>
        </main>
    )
}