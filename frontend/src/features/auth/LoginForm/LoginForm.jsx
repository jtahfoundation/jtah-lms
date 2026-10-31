import { Link, useNavigate } from "react-router-dom";
import AuthFormShell from "../AuthFormShell/AuthFormShell.jsx";
import TextField from "../../../components/TextField/TextField.jsx";
import Button from "../../../components/Button/Button.jsx";

export default function LoginForm() {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        // TODO: check the login with your backend here, then continue on success.
        navigate("/dashboard");
    }

    return (
        <AuthFormShell
            title="Log into your account"
            subtitle="Learn at your own pace. Free for women and girls of every age."
            dividerText="or log in with email"
            footer={<>Do not have an account? <Link to="/signup">Sign up</Link></>}
            onSubmit={handleSubmit}
        >
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
                placeholder="Your password"
                autoComplete="current-password"
                required
            />
            <Button type="submit" fullWidth>Log in</Button>
        </AuthFormShell>
    );
}
