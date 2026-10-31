import ProgrammeCard from "../ProgrammeCard/ProgrammeCard.jsx";
import styles from "./ProgrammeSection.module.css";
import {Monitor, Scale, HeartPulse, UsersRound} from "lucide-react"
// To add a programme, add one line here. The cards below are made from this list.
const programmes = [
    {
        id: "digital-skills",
        icon: Monitor,
        color: "#C6C4C8FF",
        title: "Digital Skills",
        description: "Computer basics, email, safe internet use"
    },
    {
        id: "know-your-rights",
        icon: Scale,
        color: "#E8A93B",
        title: "Know Your Rights",
        description: "Legal aid, GBV awareness, advocacy"
    },
    {
        id: "health",
        icon: HeartPulse,
        color: "#C6C4C8FF",
        title: "Health and Wellbeing",
        description: "Menstrual health, mental health, nutrition"
    },
    {
        id: "leadership",
        icon: UsersRound,
        color: "#E8A93B",
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
