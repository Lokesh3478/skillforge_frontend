import { courses, topics } from "../data/data";
import Carousel from "../components/Carousel";

export default function CoursesPage() {
  // group by category
  const grouped = {};
  topics.forEach((topic) => {
    grouped[topic] = courses.filter((c) => c.category === topic);
  });

  console.log(grouped); // THIS SHOULD SHOW NON-EMPTY ARRAYS

  return (
    <div className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory no-scrollbar">
      {topics.map((topic, idx) => (
        <section
          key={idx}
          className="snap-start flex flex-col justify-start px-4 py-8 gap-4 dark:text-white bg-white dark:bg-black"
        >
          <h2 className="text-2xl font-bold border-l-4 pl-4 border-blue-500 dark:border-blue-300">
            {topic}
          </h2>

          <Carousel items={grouped[topic]} topic={topic} />
        </section>
      ))}
    </div>
  );
}
