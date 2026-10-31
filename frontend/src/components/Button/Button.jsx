import { Link } from "react-router-dom";
import styles from "./Button.module.css";

/*
  <Button>Save</Button>                          -> a normal button
  <Button variant="secondary">Cancel</Button>    -> variants: primary (default), secondary, gold
  <Button to="/signup">Join free</Button>        -> a link to another page, styled like a button
  <Button href="#programmes">Explore</Button>    -> a link to a spot on the same page
  <Button fullWidth>Create account</Button>      -> stretches to the width of its container

  RULE: the Button has no outside margin and no fixed width. The parent decides spacing
  (with gap) and, if needed, passes a className that sets width/margin ONLY.
  Never use className to change colours; add a variant instead.
*/
export default function Button({
    variant = "primary",
    fullWidth = false,
    to,
    href,
    type = "button",
    className = "",
    children,
    ...rest
}) {
    const classes = [
        styles.button,
        styles[variant],
        fullWidth ? styles.fullWidth : "",
        className
    ].filter(Boolean).join(" ");

    if (to) {
        return <Link to={to} className={classes} {...rest}>{children}</Link>;
    }

    if (href) {
        return <a href={href} className={classes} {...rest}>{children}</a>;
    }

    return <button type={type} className={classes} {...rest}>{children}</button>;
}
