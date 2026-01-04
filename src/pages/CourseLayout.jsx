import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../api/axiosClient";

import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSideBar";
import CourseContentViewer from "../components/CourseContentViewer";
import CourseSidebar from "../components/CourseSidebar";
import CourseTestViewer from "../components/CourseTestViewer";

export default function CourseLayout() {
  const { slug } = useParams();

  const [course, setCourse] = useState(null);
  const [selection, setSelection] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------------- Fetch Course ---------------- */
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axiosClient.get(`/v1/courses/${slug}`);
        setCourse(res.data);
      } catch (err) {
        console.error("Failed to fetch course:", err);
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  /* ---------------- Loading / Error ---------------- */
  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center text-xl">
        Loading course...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex-1 flex items-center justify-center text-xl">
        Course not found
      </div>
    );
  }

  /* ---------------- Layout ---------------- */
  return (
    <div className="h-screen w-full flex overflow-hidden bg-white dark:bg-black text-black dark:text-white">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />

        <div className="flex flex-1 overflow-hidden">
          {/* MAIN VIEW */}
          <main className="flex-1 overflow-y-auto p-6">
            {!selection && (
              <div
                className="h-[60vh] flex items-center justify-center 
                rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-500"
              >
                Select a content or assessment to begin
              </div>
            )}

            {selection?.type === "CONTENT" && (
              <CourseContentViewer content={selection.payload} />
            )}

            {(selection?.type === "TEST" ||
              selection?.type === "FINAL_TEST") && (
              <CourseTestViewer
                assessmentId={selection.payload.assessmentId}
              />
            )}
          </main>

          {/* SIDEBAR */}
          <div className="w-72 border-l border-gray-300 dark:border-gray-700 overflow-y-auto">
            <CourseSidebar
              course={course}
              onSelect={setSelection}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
