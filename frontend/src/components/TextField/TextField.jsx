import { useId } from "react";
import styles from "./TextField.module.css";

// A label plus an input. Any extra prop (name, type, placeholder, required...) goes straight to the <input>.
export default function TextField({ label, id, ...inputProps }) {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
        <div className={styles.field}>
            <label className={styles.label} htmlFor={inputId}>
                {label}
            </label>
            <input className={styles.input} id={inputId} {...inputProps} />
        </div>
    );
}
