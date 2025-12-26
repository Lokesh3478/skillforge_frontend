import { useState, useEffect } from "react";
import CourseThumbnail from "../components/CourseThumbnail";
import axiosClient from "../api/axiosClient";

export default function DashboardHome() {
  const [recommended, setRecommended] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [continueCourses, setContinueCourses] = useState([]);
  const [index, setIndex] = useState(0);

  // Fetch all courses for the dashboard sections
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const recommendedRes = await axiosClient.get("/v1/courses");
        setRecommended(recommendedRes.data);

        const enrolledRes = await axiosClient.get("/v1/courses");
        setEnrolled(enrolledRes.data);

        const continueRes = await axiosClient.get("/v1/courses");
        setContinueCourses(continueRes.data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    };
    fetchCourses();
  }, []);

  // Carousel rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (recommended.length ? (prev + 1) % recommended.length : 0));
    }, 2500);
    return () => clearInterval(timer);
  }, [recommended]);

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Welcome Back 👋</h1>

      {/* Recommended Carousel */}
      <div className="col-span-2 p-6 rounded-2xl bg-gray-100 dark:bg-gray-900 border dark:border-gray-700 h-[260px] flex items-center justify-center relative overflow-hidden">
        {recommended.length > 0 && (
          <div className="absolute w-full h-full flex items-center justify-center">
            <CourseThumbnail
              key={recommended[index].courseId}
              course={recommended[index]}
              isCenter={true}
            />
          </div>
        )}
      </div>

      {/* Enrolled Courses */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Your Roadmaps</h2>
        <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-2">
          {enrolled.map((course) => (
            <CourseThumbnail
              key={course.courseId}
              course={course}
            />
          ))}
        </div>
      </div>

      {/* Continue Learning */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Continue Learning</h2>
        <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-2">
          {continueCourses.map((course) => (
            <CourseThumbnail
              key={course.courseId}
              course={course}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
