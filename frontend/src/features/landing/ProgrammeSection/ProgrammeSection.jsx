import ProgrammeCard from "../ProgrammeCard/ProgrammeCard.jsx";
import styles from "./ProgrammeSection.module.css";
import {Monitor, Scale, HeartPulse, UsersRound} from "lucide-react"
// To add a programme, add one line here. The cards below are made from this list.
const lightblack = "#C6C4C8FF";
const warmgold = "#E8A93B"
const programmes = [
    {
        id: "digital-skills",
        icon: Monitor,
        color: lightblack,
        title: "Digital Skills",
        description: "Computer basics, email, safe internet use"
    },
    {
        id: "know-your-rights",
        icon: Scale,
        color: warmgold,
        title: "Know Your Rights",
        description: "Legal aid, GBV awareness, advocacy"
    },
    {
        id: "health",
        icon: HeartPulse,
        color: lightblack,
        title: "Health and Wellbeing",
        description: "Menstrual health, mental health, nutrition"
    },
    {
        id: "leadership",
        icon: UsersRound,
        color: warmgold,
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
                        color={programme.color}
                        description={programme.description}
                    />
                ))}
            </div>
        </section>
    );
}
