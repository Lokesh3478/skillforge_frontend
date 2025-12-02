import React from "react";

export default function CourseSidebar({ phases }) {
  return (
    <aside className="w-64 flex-shrink-0 border-r dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 overflow-y-auto">
      {phases.map((phase, idx) => (
  <div key={idx} className="mb-6">
    <h3 className="bg-blue-500 text-white px-3 py-1 rounded-md font-semibold mb-2">
      {phase.title}
    </h3>

    <ul className="space-y-1">
      {(phase.topics || []).map((topic, i) => (
        <li key={i} className="px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors">
          {topic}
        </li>
      ))}

      {phase.assessment && (
        <li className="mt-2 px-3 py-1 rounded bg-pink-500 text-white font-medium cursor-pointer hover:bg-pink-600 transition-colors">
          {phase.assessment}
        </li>
      )}
    </ul>
  </div>
))}
    </aside>
  );
}
