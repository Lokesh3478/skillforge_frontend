import { useRef, useState, useEffect } from "react";
import CourseThumbnail from "../components/CourseThumbnail";

function Carousel({ items }) {
  const scrollRef = useRef();
  const [selected, setSelected] = useState(0);

  const scrollToIndex = (i) => {
    setSelected(i);
    scrollRef.current?.scrollTo({
      left: i * 260,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto no-scrollbar px-4"
      >
        {items.map((course, i) => (
          <div key={course.courseId} className="min-w-[240px]">
            <CourseThumbnail
              course={course}
              isCenter={i === selected}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Carousel;