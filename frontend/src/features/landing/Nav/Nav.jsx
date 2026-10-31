import { useState } from "react";
import Logo from "../../../components/Logo/Logo.jsx";
import Button from "../../../components/Button/Button.jsx";
import styles from "./Nav.module.css";

const links = [
    { href: "#programmes", label: "Programmes" },
    { href: "#about", label: "About JTAH" },
    { href: "#partners", label: "Partners" },
    { href: "#faq", label: "FAQ" }
];

export default function Nav() {
    // On phones the links hide behind a menu button. `open` remembers if the menu is showing.
    const [open, setOpen] = useState(false);
    const closeMenu = () => setOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.bar}>
                <Logo size="sm" />

                <button
                    type="button"
                    className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
                    aria-expanded={open}
                    aria-controls="main-menu"
                    aria-label={open ? "Close menu" : "Open menu"}
                    onClick={() => setOpen((isOpen) => !isOpen)}
                >
                    <span className={styles.bars} aria-hidden="true" />
                </button>

                <nav
                    id="main-menu"
                    aria-label="Main navigation"
                    className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
                >
                    <ul className={styles.links}>
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} onClick={closeMenu}>{link.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.actions}>
                        {/* No fullWidth here: on phones the grid cells stretch them, on desktop they size to their text */}
                        <Button to="/login" variant="secondary" onClick={closeMenu}>
                            Sign in
                        </Button>
                        <Button to="/signup" onClick={closeMenu}>
                            Join free
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
