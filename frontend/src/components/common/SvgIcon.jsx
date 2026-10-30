import styles from "../../styles/landingpage/SvgIcon.module.css"
export default function SvgIcon({src, alt = "icon", ...props}){
    return (
        <img
            className={styles.svgIcon}
            src={src}
            alt={alt}
            {...props}
        />
    )
};