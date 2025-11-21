import { useTheme } from "../hooks/UseTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800"
    >
      {theme === "dark" ? "🌙" : "☀"}
    </button>
  );
}