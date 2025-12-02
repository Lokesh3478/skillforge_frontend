import React from "react";

export default function StudyMaterial({ materials }) {
  if (!materials || materials.length === 0) {
    return (
      <div className="p-4 rounded-xl border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
        No study materials available.
      </div>
    );
  }

  return (
    <div className="p-4 rounded-xl border dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
      <h3 className="text-lg font-semibold mb-2 dark:text-white">Study Materials</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-300">
        {materials.map((item, idx) => (
          <li key={idx}>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
