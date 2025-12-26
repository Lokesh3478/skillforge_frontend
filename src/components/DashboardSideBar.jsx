import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BookOpen,
  ListTree,
  MessageCircle,
  HelpCircle,
  FileQuestion
} from "lucide-react";

export default function DashboardSidebar() {
  const location = useLocation();
  const BASE_URL = "/student/dashboard";
  const menu = [
    { name: "Home", icon: <Home size={20} />, path: `${BASE_URL}/home` },
    { name: "Courses", icon: <BookOpen size={20} />, path: `${BASE_URL}/courses` },
    { name: "Roadmaps", icon: <ListTree size={20} />, path: `${BASE_URL}/roadmaps` },
    { name: "Discussions", icon: <MessageCircle size={20} />, path: `${BASE_URL}/discussions` },
    { name: "Quizzes", icon: <FileQuestion size={20} />, path: `${BASE_URL}/quizzes` },
    { name: "Help", icon: <HelpCircle size={20} />, path: `${BASE_URL}/help` }
  ];

  return (
    <aside className="w-64 h-screen bg-white dark:bg-[#0d0d0d] border-r border-gray-300 dark:border-gray-800 p-6">

      <h1 className="text-2xl font-bold mb-8">SkillForge</h1>

      <nav className="flex flex-col gap-3">
        {menu.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition
              hover:bg-gray-100 dark:hover:bg-gray-800
              ${active ? "bg-gray-200 dark:bg-gray-700 font-semibold" : ""}`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>

    </aside>
  );
}
