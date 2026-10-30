import styles from "../../styles/landingpage/Hero.module.css";
import Button from "../signup/Button.jsx";
import learners from "../../assets/landingpage/learners.jpg";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <article className={styles.hero1}>
                <div className={styles.registered}>
                    <span>Registered</span>
                    <span>NGO RC-86108</span>
                    <span>since 2000</span>
                </div>

                <h1>Learn. Grow. Lead. Free for every woman and girl.</h1>

                <p>
                    JTAH Learning gives women and girls of all ages free courses in
                    digital skills, health, legal rights and leadership.
                </p>

                <div className={styles.heroButtonContainer}>
                    <Button
                        variant="primary"
                        className={styles.heroButton}
                        wrapperClassName={styles.heroButtonWrapper}
                        name="Start learning free"
                    />
                    <Button
                        variant="white"
                        className={styles.heroButton}
                        wrapperClassName={styles.heroButtonWrapper}
                        name="Explore courses"
                    />
                </div>
            </article>

            <article className={styles.hero2} aria-label="Learners">
                <img
                    src={learners}
                    alt="Learners participating in a JTAH learning activity"
                />
            </article>
        </section>
    );
}
