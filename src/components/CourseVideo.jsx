import React from "react";

export default function CourseVideo({ videoUrl, title }) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">{title}</h2>

      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md bg-gray-200 dark:bg-gray-800">
        <video
          src={videoUrl}
          controls
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
