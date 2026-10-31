import Logo from "../../components/Logo/Logo.jsx";
import styles from "./Sidebar.module.css"
import "../../styles/global.css"
import {sidebarItems} from "./navItems.js";
import "../../styles/tokens.css"
import Icon from "../../components/Icon/Icon.jsx"
import {NavLink} from "react-router-dom";

const displayItems = sidebarItems;
export default function Sidebar(){
    return (
        <main className={styles.sideBar}>
            <Logo
                className={styles.logo}
            />
            <div className={styles.barList}>
                {displayItems.map((item) => (
                    <div
                        className={styles.barListItem}
                        key={item.id}
                    >
                        <NavLink
                            to={checkRoute(item)}
                            end
                            className={({ isActive }) =>
                                `${styles.barListItemButton} ${isActive ? styles.active : ""}`
                            }
                        >
                            <Icon
                                src={item.icon}
                                className={styles.icon}
                                color="currentColor"
                            />
                            {item.label}
                        </NavLink>
                    </div>
                ))}
            </div>
        </main>
    )
}
function checkRoute(route){
    return !route.comingSoon ? route.to: '/dashboar'
}
