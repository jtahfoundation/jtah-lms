import {LayoutDashboard, Milestone, BookOpen, Video, ClipboardList, Award,
Users, Library, LifeBuoy, House, User} from "lucide-react";

export const sidebarItems = [
    {id : "dashboard", label: "Dashboard", to: "/dashboard", icon: LayoutDashboard, comingSoon: false},
    {id: "path", label: "My Learning path", to: "/path", icon: Milestone, comingSoon: true},
    {id: "courses", label: "My Courses", to: "/courses", icon: BookOpen, comingSoon: true},
    {id: "live", label: "Live Sessions", to: "/live", icon: Video, comingSoon: true},
    {id: "assignments", label: "Assignments", to: "/assignments", icon:ClipboardList, comingSoon: true},
    {id: "certificates", label: "Certificates", to: "/certificates", icon: Award, comingSoon: true},
    {id: "community", label: "Community", to: "/community", icon: Users, comingSoon: true },
    {id: "resources", label: "Resources", to: "/resources", icon: Library, comingSoon: true},
    {id: "help", label: "Help and Support", to: "/help", icon: LifeBuoy, comingSoon: true}
];

export const tabBarItems = [
    { id: "home",      label: "Home",      to: "/dashboard", icon: House, comingSoon: false },
    { id: "courses",   label: "Courses",   to: "/courses",   icon: BookOpen, comingSoon: true },
    { id: "live",      label: "Live",      to: "/live",      icon: Video, comingSoon: true },
    { id: "community", label: "Community", to: "/community", icon: Users, comingSoon: true },
    { id: "profile",   label: "Profile",   to: "/profile",   icon: User, comingSoon: true },
];

export const profileMenuItems = [
    { id: "assignments", label: "Assignments",      to: "/assignments", icon: ClipboardList, comingSoon: true },
    { id: "path",        label: "My Learning Path", to: "/path",        icon: Milestone, comingSoon: true },
    { id: "resources",   label: "Resources",        to: "/resources",   icon: Library, comingSoon: true },
    { id: "certificates",label: "Certificates",     to: "/certificates",icon: Award, comingSoon: true },
    { id: "help",        label: "Help & Support",   to: "/help",        icon: LifeBuoy, comingSoon: true },
];
