import Button from "../../../components/Button/Button.jsx";
import learners640 from "../../../assets/images/learners-640.webp";
import learners1200 from "../../../assets/images/learners-1200.webp";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.copy}>
                <div className={styles.badge}>
                    <span>Registered</span>
                    <span>NGO RC-86108</span>
                    <span>since 2000</span>
                </div>

                <h1 className={styles.title}>Learn. Grow. Lead. Free for every woman and girl.</h1>

                <p className={styles.text}>
                    JTAH Learning gives women and girls of all ages free courses in
                    digital skills, health, legal rights and leadership.
                </p>

                <div className={styles.buttons}>
                    <Button to="/signup" fullWidth>Start learning free</Button>
                    <Button href="#programmes" variant="secondary" fullWidth>Explore courses</Button>
                </div>
            </div>

            <div className={styles.imageFrame}>
                {/* srcSet lets a phone download the 28 KB image and a desktop the 64 KB one.
                    width/height reserve the space so the page doesn't jump while it loads. */}
                <img
                    className={styles.image}
                    src={learners1200}
                    srcSet={`${learners640} 640w, ${learners1200} 1200w`}
                    sizes="(min-width: 1024px) 565px, 100vw"
                    width="1200"
                    height="900"
                    alt="Learners participating in a JTAH learning activity"
                    decoding="async"
                />
            </div>
        </section>
    );
}
