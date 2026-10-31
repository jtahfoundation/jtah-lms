import ProgrammeCard from "../ProgrammeCard/ProgrammeCard.jsx";
import computerIcon from "../../../assets/icons/computer.svg";
import scaleIcon from "../../../assets/icons/scale.svg";
import heartPulseIcon from "../../../assets/icons/heart-pulse.svg";
import usersRoundIcon from "../../../assets/icons/users-round.svg";
import styles from "./ProgrammeSection.module.css";

// To add a programme, add one line here. The cards below are made from this list.
const programmes = [
    {
        id: "digital-skills",
        icon: computerIcon,
        title: "Digital Skills",
        description: "Computer basics, email, safe internet use"
    },
    {
        id: "know-your-rights",
        icon: scaleIcon,
        title: "Know Your Rights",
        description: "Legal aid, GBV awareness, advocacy"
    },
    {
        id: "health",
        icon: heartPulseIcon,
        title: "Health and Wellbeing",
        description: "Menstrual health, mental health, nutrition"
    },
    {
        id: "leadership",
        icon: usersRoundIcon,
        title: "Leadership & Livelihood",
        description: "Confidence, small business, finance"
    }
];

export default function ProgrammeSection() {
    return (
        <section className={styles.section} id="programmes">
            <h2 className={styles.title}>Programmes for every stage of life</h2>

            <div className={styles.cards}>
                {programmes.map((programme) => (
                    <ProgrammeCard
                        key={programme.id}
                        icon={programme.icon}
                        title={programme.title}
                        description={programme.description}
                    />
                ))}
            </div>
        </section>
    );
}
