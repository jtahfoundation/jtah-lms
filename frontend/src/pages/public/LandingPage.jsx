import Nav from "../../components/landingpage/Nav.jsx";
import Hero from "../../components/landingpage/Hero.jsx";
import Programme from "../../components/landingpage/Programme.jsx";
import styles from "../../styles/landingpage/LandingPage.module.css"
export default function LandingPage(){
    return (
        <section className={styles.landingPage}>
            <Nav/>
            <Hero/>
            <Programme/>
        </section>
    )
}