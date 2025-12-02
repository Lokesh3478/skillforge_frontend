import { useState } from "react";
import { useParams } from "react-router-dom";

import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import CourseVideo from "../components/CourseVideo";
import StudyMaterial from "../components/StudyMaterial";
import CommentsThread from "../components/CommentsThread";
import CourseSidebar from "../components/CourseSidebar";
import { toSlug } from "../utils/slug";

// import course data
import { courses } from "../data/data";

export default function CourseLayout() {
  const { slug } = useParams();
  const course = courses.find(c => toSlug(c.title) === slug)
  console.log("Course found:", course+" for slug: "+slug);
  const [showComments, setShowComments] = useState(false);

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

      {/* LEFT → VIDEO + MATERIAL/COMMENTS */}
      <main className="flex-1 flex flex-col overflow-y-auto p-6 space-y-6">

        {/* Course Video */}
        <CourseVideo videoUrl={course.video} title={course.title} />

        {/* Toggle: Study Material / Comments */}
        <div className="flex items-center gap-4">
          <button
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              !showComments
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
            }`}
            onClick={() => setShowComments(false)}
          >
            Study Material
          </button>

          <button
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              showComments
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
            }`}
            onClick={() => setShowComments(true)}
          >
            Comments
          </button>
        </div>

        {/* Content Section */}
        {showComments ? (
          <CommentsThread comments={course.comments} />
        ) : (
          <StudyMaterial materials={course.materials} />
        )}
      </main>

      {/* RIGHT SIDEBAR → COURSE PHASES */}
      <div className="w-72 border-l border-gray-300 dark:border-gray-700 overflow-y-auto">
        <CourseSidebar phases={course.phases} />
      </div>
    </div>
  </div>
</div>
  );
}
