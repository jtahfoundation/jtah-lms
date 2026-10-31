import AuthLayout from "../layouts/AuthLayout/AuthLayout.jsx";
import SignupForm from "../features/auth/SignupForm/SignupForm.jsx";

export default function SignupPage() {
    return (
        <AuthLayout>
            <SignupForm />
        </AuthLayout>
    );
}
