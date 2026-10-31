import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OTPInput } from "input-otp";
import Icon from "../../../components/Icon/Icon.jsx";
import Button from "../../../components/Button/Button.jsx";
import {Mail} from "lucide-react";
import styles from "./VerifyEmailForm.module.css";

const CODE_LENGTH = 6;

export default function VerifyEmailForm() {
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    function handleVerify() {
        // TODO: send `code` to your backend here, then continue on success.
        navigate("/dashboard");
    }

    return (
        <section className={styles.verify}>
            <Icon
                src={Mail}
                size="lg"
                color={"#5B3FA8"}
            />
            <h1 className={styles.title}>Verify your email</h1>
            <p className={styles.text}>
                We sent a 6-digit code to your email. Enter it below to activate your account.
            </p>

            <OTPInput
                maxLength={CODE_LENGTH}
                containerClassName={styles.otpRoot}
                value={code}
                onChange={setCode}
                aria-label="6-digit verification code"
                render={({ slots }) => (
                    <div className={styles.otp}>
                        {slots.map((slot, index) => (
                            <div
                                key={index}
                                className={`${styles.slot} ${slot.isActive ? styles.active : ""}`}
                            >
                                {slot.char || ""}
                            </div>
                        ))}
                    </div>
                )}
            />

            <Button
                className={styles.submit}
                disabled={code.length < CODE_LENGTH}
                onClick={handleVerify}
            >
                Verify and continue
            </Button>

            <button type="button" className={styles.resend}>
                Didn't get it? Resend code (0:45)
            </button>
        </section>
    );
}
