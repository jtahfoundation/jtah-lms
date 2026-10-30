import styles from "../../styles/signup/Input.module.css";

export default function Input({ rep, name, placeholder, type = "text", autoComplete }) {
    const inputId = `signup-${name}`;

    return (
        <div className={styles.inputSection}>
            <label className={styles.label} htmlFor={inputId}>
                {rep}
            </label>
            <input
                className={styles.input}
                id={inputId}
                name={name}
                placeholder={placeholder}
                type={type}
                autoComplete={autoComplete}
            />
        </div>
    );
}
