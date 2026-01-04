import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BookOpen,
  ListTree,
  Users,
  FilePlus,
  FileText,
  Home
} from "lucide-react";

export default function AdminSidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/admin" },
    { name: "Courses", icon: <BookOpen size={20} />, path: "/admin/courses" },
    { name: "Taxonomy - Fields", icon: <ListTree size={20} />, path: "/admin/taxonomy/fields" },
    { name: "Taxonomy - Domains", icon: <FileText size={20} />, path: "/admin/taxonomy/domains" },
    { name: "Taxonomy - Topics", icon: <FilePlus size={20} />, path: "/admin/taxonomy/topics" },
    { name: "Users", icon: <Users size={20} />, path: "/admin/users" }
  ];

  return (
    <aside
      className={`flex flex-col bg-red-600 text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-red-700">
        <span className="font-bold text-lg">{isOpen ? "Admin" : "A"}</span>
        <button onClick={toggleSidebar} className="p-1 hover:bg-red-700 rounded">
          {isOpen ? "<" : ">"}
        </button>
      </div>

      <nav className="flex-1 flex flex-col mt-4">
        {menu.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-red-700 transition ${
                active ? "bg-red-800 font-semibold" : ""
              }`}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
