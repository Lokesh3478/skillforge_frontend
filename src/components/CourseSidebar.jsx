import { useState } from "react";
import axiosClient from "../api/axiosClient";

export default function CourseSidebar({ course, onSelect }) {
  const [expandedPhaseIds, setExpandedPhaseIds] = useState(new Set());
  const [phaseDetailsMap, setPhaseDetailsMap] = useState({});

  if (!course) return null;

  const handlePhaseToggle = async (phaseId) => {
    setExpandedPhaseIds((prev) => {
      const next = new Set(prev);
      next.has(phaseId) ? next.delete(phaseId) : next.add(phaseId);
      return next;
    });

    if (!phaseDetailsMap[phaseId]) {
      try {
        const res = await axiosClient.get(`/v1/phases/${phaseId}`);
        setPhaseDetailsMap((prev) => ({
          ...prev,
          [phaseId]: res.data,
        }));
      } catch (err) {
        console.error("Failed to fetch phase:", err);
      }
    }
  };

  return (
    <aside className="w-64 flex-shrink-0 bg-gray-50 dark:bg-gray-900 p-4 overflow-y-auto">

      {/* Course Name */}
      <h2 className="text-xl font-bold mb-4 dark:text-white">
        {course.courseName}
      </h2>

      {/* Phases */}
      {course.phases.map((phase) => {
        const isOpen = expandedPhaseIds.has(phase.phaseId);
        const phaseData = phaseDetailsMap[phase.phaseId];

        return (
          <div key={phase.phaseId} className="mb-3">

            {/* Phase Header */}
            <div
              className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded cursor-pointer select-none"
              onClick={() => handlePhaseToggle(phase.phaseId)}
            >
              <span className="font-bold text-lg">
                {isOpen ? "-" : "+"}
              </span>
              <span className="font-semibold">
                {phase.title}
              </span>
            </div>

            {/* Phase Contents */}
            {isOpen && phaseData && (
              <ul className="mt-2 ml-6 space-y-1">

                {/* Contents */}
                {(phaseData.contents || []).map((content) => (
                  <li
                    key={content.contentId}
                    className="bg-white text-black px-3 py-1 rounded cursor-pointer hover:bg-gray-200"
                    onClick={() =>
                      onSelect({
                        type: "CONTENT",
                        payload: content,
                      })
                    }
                  >
                    {content.contentName}
                  </li>
                ))}

                {/* Phase Test */}
                <li
                  className="mt-2 bg-pink-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-pink-600"
                  onClick={() =>
                    phaseData.testId &&
                    onSelect({
                      type: "PHASE_TEST",
                      payload: {
                        assessmentId: phaseData.testId,
                        phaseId: phaseData.phaseId,
                      },
                    })
                  }
                >
                  {phaseData.testId ? "Assessment" : "Test not available"}
                </li>

              </ul>
            )}
          </div>
        );
      })}

      {/* Final Assessment */}
        <div
          className="mt-4 bg-green-500 text-white px-3 py-2 rounded font-semibold cursor-pointer hover:bg-green-600"
          onClick={() =>
            onSelect({
              type: "FINAL_TEST",
              payload: {
                assessmentId: course.finalAssessmentId,
                courseId: course.courseId,
              },
            })
          }
        >
          {course.finalAssessmentId ? "Final Assessment" : "Final Assessment not available"}
        </div>

    </aside>
  );
}
