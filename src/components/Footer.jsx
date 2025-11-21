export default function Footer() {
  return (
    <footer className="py-8 text-center opacity-70 border-t border-gray-300 dark:border-gray-700">
      © {new Date().getFullYear()} SkillForage. All rights reserved.
    </footer>
  );
}