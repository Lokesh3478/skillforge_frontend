import { useRef, useState, useEffect } from "react";
import CourseThumbnail from "../components/CourseThumbnail";

function Carousel({ items, topic }) {
  const scrollRef = useRef();
  const [selected, setSelected] = useState(0); // first card selected

  const scrollToIndex = (i) => {
    setSelected(i);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: i * 260,   // card width + gap
        behavior: "smooth",
      });
    }
  };

  const handleLeft = () => {
    if (selected > 0) scrollToIndex(selected - 1);
  };

  const handleRight = () => {
    if (selected < items.length - 1) scrollToIndex(selected + 1);
  };

  useEffect(() => {
    scrollToIndex(0); // ensure first card is selected on load
  }, []);

  return (
    <div className="relative w-full">

      <button
        onClick={handleLeft}
        aria-label="scroll left"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50"
      >
        ❮
      </button>

      <button
        onClick={handleRight}
        aria-label="scroll right"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50"
      >
        ❯
      </button>

      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto no-scrollbar px-4"
      >
        {items.map((c, i) => (
          <div key={i} className="min-w-[240px]">
            <CourseThumbnail
              image={c.image}
              title={c.title}
              duration={c.duration}
              isCenter={i === selected}
              onClick={() => scrollToIndex(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
