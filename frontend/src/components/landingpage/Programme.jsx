import ProgrammeCard from "./ProgrammeCard.jsx";
import Button from "../signup/Button.jsx";
import styles from "../../styles/landingpage/Programme.module.css";
import computerSvg from "../../assets/icons/computer.svg";
import scaleSvg from "../../assets/icons/scale.svg";
import heartPulseSvg from "../../assets/icons/heart-pulse.svg";
import usersRoundSvg from "../../assets/icons/users-round.svg";

export default function Programme() {
    return (
        <section className={styles.programme} id="programmes">
            <h2 className={styles.programmeTitle}>Programmes for every stage of life</h2>

            <div className={styles.programmeCards}>
                <ProgrammeCard
                    iconLink={computerSvg}
                    title="Digital Skills"
                    subtitle="Computer basics, email, safe internet use"
                />
                <ProgrammeCard
                    iconLink={scaleSvg}
                    title="Know Your Rights"
                    subtitle="Legal aid, GBV awareness, advocacy"
                />
                <ProgrammeCard
                    iconLink={heartPulseSvg}
                    title="Health and Wellbeing"
                    subtitle="Menstrual health, mental health, nutrition"
                />
                <ProgrammeCard
                    iconLink={usersRoundSvg}
                    title="Leadership & Livelihood"
                    subtitle="Confidence, small business, finance"
                />
            </div>

            <div className={styles.trustStrip}>
                <div className={styles.trustCard}>
                    <h3>24+</h3>
                    <p>Years serving communities</p>
                </div>
                <div className={styles.trustCard}>
                    <h3>Free</h3>
                    <p>Totally free</p>
                </div>
                <div className={styles.trustCard}>
                    <h3>RC-86108</h3>
                    <p>CAC registered</p>
                </div>
                <div className={styles.trustCard}>
                    <h3>Verified</h3>
                    <p>Official JTAH email only</p>
                </div>
            </div>

            <div className={styles.programmeLast}>
                <h2>Ready to begin? Create your free account in two minutes.</h2>
                <Button
                    variant="primary"
                    wrapperClassName={styles.programmeButtonWrapper}
                    className={styles.programmeButton}
                    name="Join free"
                />
            </div>
        </section>
    );
}
