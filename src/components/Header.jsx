import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
      <div className="text-2xl font-bold">SkillForge</div>

      <div className="flex items-center space-x-6">
        <div className="relative group">
          <button className="hover:opacity-70">Courses</button>
          <div className="absolute top-full left-0 hidden group-hover:flex flex-col w-40 bg-white dark:bg-gray-800 border rounded shadow-lg p-2">
            <Link to="/courses/web" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Web Development</Link>
            <Link to="/courses/mobile" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Mobile Development</Link>
            <Link to="/courses/data" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Data Science</Link>
          </div>
        </div>

        <div className="relative group">
          <button className="hover:opacity-70">Roadmaps</button>
          <div className="absolute top-full left-0 hidden group-hover:flex flex-col w-40 bg-white dark:bg-gray-800 border rounded shadow-lg p-2">
            <Link to="/roadmaps/frontend" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Frontend</Link>
            <Link to="/roadmaps/backend" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Backend</Link>
            <Link to="/roadmaps/devops" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">DevOps</Link>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 border rounded dark:bg-gray-800 dark:border-gray-600"
        />
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/login" className="hover:opacity-70">Login</Link>
        <Link to="/signup" className="hover:opacity-70">Student-Registration</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}