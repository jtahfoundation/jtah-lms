import { Link, useNavigate } from "react-router-dom";
import AuthFormShell from "../AuthFormShell/AuthFormShell.jsx";
import TextField from "../../../components/TextField/TextField.jsx";
import Button from "../../../components/Button/Button.jsx";

export default function SignupForm() {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        // TODO: send the form to your backend here, then continue on success.
        navigate("/verify-email");
    }

    return (
        <AuthFormShell
            title="Create your free account"
            subtitle="Learn at your own pace. Free for women and girls of every age."
            dividerText="or sign up with email"
            footer={<>Already have an account? <Link to="/login">Sign in</Link></>}
            onSubmit={handleSubmit}
        >
            <TextField
                label="Full name"
                name="name"
                type="text"
                placeholder="e.g. Adaeze Okafor"
                autoComplete="name"
                required
            />
            <TextField
                label="Email address"
                name="email"
                type="email"
                placeholder="e.g. you@example.com"
                autoComplete="email"
                required
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                placeholder="At least 8 characters"
                autoComplete="new-password"
                minLength={8}
                required
            />
            <TextField
                label="Confirm password"
                name="confirmPassword"
                type="password"
                placeholder="Must match password"
                autoComplete="new-password"
                required
            />
            <Button type="submit" fullWidth>Create account</Button>
        </AuthFormShell>
    );
}
