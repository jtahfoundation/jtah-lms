import SvgLargeIcon from "../../components/common/SvgLargeIcon.jsx";
import {OTPInput} from "input-otp";
import mailSvgIcon from "../../assets/icons/mail.svg"
import React from "react";
import Button from "../../components/common/Button.jsx";
import styles from "../../styles/verifyemail/verifyEmail.module.css"
import "../../index.css"
import Logo from "../../components/common/Logo.jsx";
export default function VerifyEmail(){
    const [otp, setOtp] = React.useState("");
    return (
        <>
            <Logo
                className={styles.logo}
            />
            <section className={styles.verify}>
                <SvgLargeIcon
                    src={mailSvgIcon}
                />
                <h1>Verify Your Email</h1>
                <p>We sent a 6-digit code to your email. Enter it below to
                activate your account.</p>
                <OTPInput
                    maxLength={6}
                    value={otp}
                    onChange={setOtp}
                    render={({slots}) => (
                        <div className={styles.otpContainer}>
                            {slots.map((slot, index) => (
                                <div
                                    key={index}
                                    className={`${styles.otpSlot} ${slot.isActive ? styles.active : ""}`}
                                >
                                    {slot.char || ""}
                                </div>
                            ))}
                        </div>
                    )}
                />
                <Button
                    variant={"primary"}
                    name={"Verify and continue"}
                    onClick={""}
                    className={styles.verifyButton}
                    wrapperClassName={styles.verifyButtonWrapper}
                />
                <a href={"#"}>Didn't get it? Resend code (0:45)</a>
            </section>
        </>
    )
}