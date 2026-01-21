import {
  LayoutDashboard,
  Users,
  BookOpen,
  ShoppingCart,
  FileText,
  MessageSquare,
  Calendar,
  GraduationCap,
  Bell,
  ClipboardList,
  User,
} from "lucide-react";

/* TYPES */
export type SidebarItem = {
  name: string;
  icon: any;
  href: string;
  badge?: number | string; // ✅ OPTIONAL (important)
};

export type SidebarSection = {
  group: string;
  items: SidebarItem[];
};

/* MENU DATA */
export const sidebarMenu: SidebarSection[] = [
  {
    group: "Main",
    items: [
      {
        name: "Dashboard",
        icon: LayoutDashboard,
        href: "/admin",
        badge: 5, // example (remove if not needed)
      },
      {
        name: "Manage Moderators",
        icon: Users,
        href: "/admin/manage-moderators",
      },
    ],
  },
  {
    group: "Academic",
    items: [
      {
        name: "Courses",
        icon: BookOpen,
        href: "/admin/courses",
      },
      {
        name: "Books",
        icon: BookOpen,
        href: "/admin/add-book",
      },
      {
        name: "Classes",
        icon: GraduationCap,
        href: "/admin/classes",
      },
      {
        name: "Exams",
        icon: FileText,
        href: "/admin/exams",
      },
      {
        name: "Add Routine",
        icon: Calendar,
        href: "/admin/add-routine",
      },
      {
        name: "Add Result",
        icon: ClipboardList,
        href: "/admin/add-results",
      },
    ],
  },
  {
    group: "Operations",
    items: [
      {
        name: "Order Management",
        icon: ShoppingCart,
        href: "/admin/order-management",
      },
      {
        name: "Form",
        icon: FileText,
        href: "/admin/form",
      },
      {
        name: "SMS History",
        icon: MessageSquare,
        href: "/admin/sms",
      },
      {
        name: "Pre-Booking",
        icon: Calendar,
        href: "/admin/pre-booking",
      },
      {
        name: "Mentor Activity",
        icon: User,
        href: "/admin/mentor-activity",
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        name: "Edit Profile",
        icon: User,
        href: "/admin/edit-profile",
      },
      {
        name: "Admission News",
        icon: FileText,
        href: "/admin/admission-news",
      },
      {
        name: "Course Notifications",
        icon: Bell,
        href: "/admin/course-notifications",
      },
      {
        name: "Banner Notification",
        icon: Bell,
        href: "/admin/banner-notifications",
      },
    ],
  },
];
