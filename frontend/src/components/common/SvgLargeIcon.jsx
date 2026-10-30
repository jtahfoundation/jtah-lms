import styles from "../../styles/landingpage/SvgIcon.module.css"
export default function SvgLargeIcon({src, alt = "icon", ...props}){
    return (
        <img
            className={styles.svgLargeIcon}
            src={src}
            alt={alt}
            {...props}
        />
    )
};