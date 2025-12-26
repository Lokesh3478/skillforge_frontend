import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../api/axiosClient";

import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import CourseContentViewer from "../components/CourseContentViewer";
import CourseSidebar from "../components/CourseSidebar";

export default function CourseLayout() {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        console.log("Fetching course with slug:", slug);
        const res = await axiosClient.get(`/v1/courses/${slug}`);
        setCourse(res.data);
        console.log("Fetched course data:", res.data);
        // Default: select first content of first phase if exists
        if (res.data.phases?.length > 0) {
          const phaseRes = await axios.get(
            `/v1/phases/${res.data.phases[0].phaseId}`
          );
          const firstContent = phaseRes.data.contents?.[0] || null;
          setSelectedContent(firstContent);
        }
      } catch (err) {
        console.error("Failed to fetch course:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center text-xl dark:text-white">
        Loading course...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex-1 flex items-center justify-center text-xl dark:text-white">
        Course not found
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex overflow-hidden bg-white dark:bg-black text-black dark:text-white">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />

        {/* MAIN CONTENT AREA */}
        <div className="flex flex-1 overflow-hidden">
          {/* LEFT → CONTENT VIEWER */}
          <main className="flex-1 flex flex-col overflow-y-auto p-6 space-y-6">
            <CourseContentViewer content={selectedContent} />
          </main>

          {/* RIGHT SIDEBAR → COURSE PHASES */}
          <div className="w-72 border-l border-gray-300 dark:border-gray-700 overflow-y-auto">
            <CourseSidebar course={course} onSelectContent={setSelectedContent} />
          </div>
        </div>
      </div>
    </div>
  );
}
