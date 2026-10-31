import styles from "./TrustStrip.module.css";

const facts = [
    { value: "24+", label: "Years serving communities" },
    { value: "Free", label: "Totally free" },
    { value: "RC-86108", label: "CAC registered" },
    { value: "Verified", label: "Official JTAH email only" }
];

export default function TrustStrip() {
    return (
        <section className={styles.strip} aria-label="Why you can trust JTAH">
            {facts.map((fact) => (
                <div key={fact.value} className={styles.item}>
                    <p className={styles.value}>{fact.value}</p>
                    <p className={styles.label}>{fact.label}</p>
                </div>
            ))}
        </section>
    );
}
