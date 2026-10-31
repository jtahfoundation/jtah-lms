// Placeholder. We build this next: LearnerLayout (sidebar, topbar, mobile tab bar)
// plus the dashboard cards in features/dashboard.
import Sidebar from "../layouts/LearnerLayout/Sidebar.jsx";
export default function DashboardPage() {
    return (
        <main style={{ padding: "32px 20px" }}>
            <Sidebar/>
        </main>
    );
}
