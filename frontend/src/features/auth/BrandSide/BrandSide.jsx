import StatCard from "../StatCard/StatCard.jsx";
import styles from "./BrandSide.module.css";

const stats = [
    { title: "24+", subtitle: "Years of service" },
    { title: "100%", subtitle: "Free to learn" },
    { title: "All ages", subtitle: "Girls and women" }
];

export default function BrandSide() {
    return (
        <section className={styles.brandSide} aria-label="About JTAH Foundation">
            <div className={styles.contents}>
                <span className={styles.registered}>Registered NGO · RC-86108</span>
                <h2 className={styles.heading}>
                    For the love of humanity, learn without limits.
                </h2>
                <p className={styles.description}>
                    Digital skills, health, rights and leadership courses by JTAH Foundation,
                    serving women and girls since 2000.
                </p>
                <div className={styles.stats}>
                    {stats.map((stat) => (
                        <StatCard key={stat.title} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
