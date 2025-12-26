import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CourseThumbnail({ course, isCenter }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${course.courseId}`);
  };

  console.log(course);
  return (
    <motion.button
      onClick={handleClick}
      animate={{
        scale: isCenter ? 1.15 : 0.9,
        opacity: isCenter ? 1 : 0.5,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="w-[240px] bg-white/10 backdrop-blur-lg border border-white/20 
      dark:bg-black/20 dark:border-white/10 rounded-2xl p-4 shadow-lg 
      flex-shrink-0 transition-all cursor-pointer text-left"
    >
      <div className="h-40 w-full rounded-xl overflow-hidden mb-4 shadow-md 
        bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
        <span className="opacity-50 text-sm">No Image</span>
      </div>

      <h3 className="text-lg font-semibold">{course.courseName}</h3>
      <p className="text-sm opacity-70">
        {course.durationInMinutes} mins
      </p>
    </motion.button>
  );
}
