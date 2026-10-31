import { Link } from "react-router-dom";
import logo from "../../assets/images/jtah_logo.jpg";
import styles from "./Logo.module.css";

// size="md" (default) is the big logo on forms, size="sm" is the smaller one in the nav bar.
export default function Logo({ size = "md", className = "" }) {
    return (
        <Link to="/" className={`${styles.link} ${className}`}>
            <img
                src={logo}
                alt="JTAH Foundation"
                width="150"
                height="81"
                className={styles[size]}
            />
        </Link>
    );
}
