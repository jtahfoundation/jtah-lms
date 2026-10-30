import logo from "../../assets/jtah_logo.jpg"
import styles from "../../styles/signup/Logo.module.css"

export default function Logo({className= ""}) {
    return (
        <img
            src={logo}
            alt={"Logo image"}
            className={`${styles.logoImg} ${className}`}
        />
    )
}