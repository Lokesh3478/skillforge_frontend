import ThemeToggle from "./ThemeToggle";

export default function DashboardHeader() {
  return (
    <header className="w-full h-16 px-6 flex items-center justify-between 
      bg-white dark:bg-black border-b border-gray-300 dark:border-gray-700">

      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 
        text-black dark:text-white border border-gray-300 dark:border-gray-700 w-72"
      />

      <div className="flex items-center space-x-6 text-xl">
        <button>🔔</button>
        <button>👤</button>
        <ThemeToggle />
      </div>
    </header>
  );
}
