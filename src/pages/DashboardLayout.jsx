// DashboardLayout.jsx
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="h-screen w-full flex overflow-hidden bg-white dark:bg-black text-black dark:text-white">

      <DashboardSidebar className="fixed left-0 top-0 h-screen" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />

        {/* ONLY this scrolls */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 no-scrollbar">
          <Outlet />
        </main>
      </div>

    </div>
  );
}
