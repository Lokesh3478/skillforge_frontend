import React from "react";
import axiosClient from "../api/axiosClient";
export default function CourseContentViewer({ content }) {
  if (!content) {
    return (
      <div className="w-full max-w-5xl mx-auto h-[60vh] 
        flex items-center justify-center rounded-xl
        bg-gray-100 dark:bg-gray-900 text-gray-500">
        Select a content to start learning
      </div>
    );
  }

  if (!content.contentUrl) {
    return (
      <div className="w-full max-w-5xl mx-auto text-center text-red-500">
        Content URL not available
      </div>
    );
  }

  // Google Docs → embeddable preview
  const embedUrl = content.contentUrl.replace("/edit", "/preview");

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">
        {content.contentName}
      </h2>

      <div
        className="relative w-full h-[80vh] rounded-xl overflow-hidden shadow-md 
        bg-gray-200 dark:bg-gray-800"
      >
        <iframe
          src={embedUrl}
          title={content.contentName}
          className="w-full h-full border-none"
          allow="autoplay"
        />
      </div>
    </div>
  );
}
