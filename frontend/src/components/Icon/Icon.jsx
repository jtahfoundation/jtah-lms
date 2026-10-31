import styles from "./Icon.module.css";

// Replaces SvgIcon and SvgLargeIcon. size="md" is 48px, size="lg" is 100px.
// alt is empty by default because these icons are decoration. Pass alt only if the icon carries meaning.

export default function Icon({
    src: IconComponent,
    size = "md",
    className = "",
    color = "currentColor"
}) {
    const pixels = size === "lg" ? 100 : 48;

    return (
        <IconComponent
            size={pixels}
            color={color}
            className={`${styles[size]} ${className}`}
            aria-hidden="true"
        />
    );
}
