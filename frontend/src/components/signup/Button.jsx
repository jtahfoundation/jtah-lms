import styles from "../../styles/signup/Button.module.css";

export default function Button({
    variant,
    onClick,
    name,
    type = "button",
    className = "",
    wrapperClassName = ""
}) {
    const classes = [
        styles.buttonInput,
        variant ? styles[variant] : "",
        className
    ].filter(Boolean).join(" ");

    return (
        <div className={`${styles.buttonWrap} ${wrapperClassName}`}>
            <button className={classes} type={type} onClick={onClick}>
                {name}
            </button>
        </div>
    );
}
