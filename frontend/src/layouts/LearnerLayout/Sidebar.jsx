import Logo from "../../components/Logo/Logo.jsx";
import styles from "./Sidebar.module.css"
import {sidebarItems} from "./navItems.js";
import Button from "../../components/Button/Button.jsx";
import Icon from "../../components/Icon/Icon.jsx"
const displayItems = sidebarItems;
export default function Sidebar(){
    return (
        <main>
            <Logo
                className={styles.logo}
            />
            <div>
                {displayItems.map((item) => (
                    <>
                        <Icon
                            src={item.icon}
                        ></Icon>
                        <Button
                            key={item.id}
                            variant={"secondary"}
                            to={checkRoute(item)}
                        >{item.label}</Button>
                    </>
                ))}
            </div>
        </main>
    )
}
function checkRoute(route){
    return !route.comingSoon ? route.to: '/dashboard'
}
