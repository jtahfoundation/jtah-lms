import StatCard from "./StatCard.jsx";
import styles from "../../styles/signup/BrandSide.module.css";

export default function BrandSide() {
    return (
        <section className={styles.brandSide} aria-label="About JTAH Foundation">
            <div className={styles.brandSideContents}>
                <span className={styles.registered}>Registered NGO RC-86108</span>
                <h2 className={styles.brandSideText}>
                    For the love of humanity, learn without limits.
                </h2>
                <p className={styles.brandDescription}>
                    Digital skills, health, rights and leadership courses by JTAH Foundation,
                    serving women and girls since 2000.
                </p>
                <div className={styles.statCards}>
                    <StatCard title="24+" subtitle="Years of service" />
                    <StatCard title="100%" subtitle="Free to learn" />
                    <StatCard title="All ages" subtitle="Girls and women" />
                </div>
            </div>
        </section>
    );
}
