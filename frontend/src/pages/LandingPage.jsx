import Nav from "../features/landing/Nav/Nav.jsx";
import Hero from "../features/landing/Hero/Hero.jsx";
import ProgrammeSection from "../features/landing/ProgrammeSection/ProgrammeSection.jsx";
import TrustStrip from "../features/landing/TrustStrip/TrustStrip.jsx";
import CtaBanner from "../features/landing/CtaBanner/CtaBanner.jsx";
import styles from "./LandingPage.module.css";

// A page only puts pieces together. The real work lives in features/landing.
export default function LandingPage() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <div className={styles.content}>
                    <ProgrammeSection />
                    <TrustStrip />
                    <CtaBanner />
                </div>
            </main>
        </>
    );
}
