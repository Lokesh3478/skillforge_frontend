import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

export default function CourseSidebar({ course, onSelectContent }) {
  const [phasesDetails, setPhasesDetails] = useState([]);

  useEffect(() => {
    if (!course?.phases) return;

    const fetchPhases = async () => {
      try {
        console.log("Fetching phases for course:", course.courseId);
        const responses = await Promise.all(
          course.phases.map((phase) =>
            axiosClient.get(`/v1/phases/${phase.phaseId}`)
          )
        );
        setPhasesDetails(responses.map((res) => res.data));
      } catch (err) {
        console.error("Failed to fetch phases:", err);
      }
    };

    fetchPhases();
  }, [course]);
  console.log(course);
  console.log(phasesDetails);

  if (!course) return null;

  return (
    <aside className="w-64 flex-shrink-0 border-r dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 overflow-y-auto">
      
      {/* Course Name */}
      <h2 className="text-xl font-bold mb-4 dark:text-white">
        {course.courseName}
      </h2>

      {phasesDetails.map((phase) => (
        <div key={phase.phaseId} className="mb-6">
          <h3 className="bg-blue-500 text-white px-3 py-1 rounded-md font-semibold mb-2">
            {phase.title}
          </h3>

          <ul className="space-y-1">
            {(phase.contents || []).map((content) => (
              <li
                key={content.contentId}
                className="px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                onClick={() => onSelectContent(content)}
              >
                {content.contentName}
              </li>
            ))}

            <li
              className="mt-2 px-3 py-1 rounded bg-pink-500 text-white font-medium cursor-pointer hover:bg-pink-600 transition-colors"
              onClick={() =>
                onSelectContent({
                  contentName: phase.testId ? "Assessment" : "Test not available",
                  contentUrl: null,
                })
              }
            >
              {phase.testId ? "Assessment" : "Test not available"}
            </li>
          </ul>
        </div>
      ))}

      {/* Final Assessment */}
      {course.finalAssessmentId && (
        <div className="mt-4">
          <h3
            className="px-3 py-1 rounded bg-red-500 text-white font-semibold cursor-pointer hover:bg-red-600 transition-colors"
            onClick={() =>
              onSelectContent({
                contentName: "Final Assessment",
                contentUrl: null,
              })
            }
          >
            Final Assessment
          </h3>
        </div>
      )}
    </aside>
  );
}
