import AuthLayout from "../layouts/AuthLayout/AuthLayout.jsx";
import LoginForm from "../features/auth/LoginForm/LoginForm.jsx";

export default function LoginPage() {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
}
