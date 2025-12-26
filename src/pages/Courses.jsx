import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { fetchAllTopics } from "../api/services/taxonomy";
import { fetchCoursesByTopic } from "../api/services/course";

export default function CoursesPage() {
  const [topics, setTopics] = useState([]);
  const [groupedCourses, setGroupedCourses] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourses() {
      try {
        const topicRes = await fetchAllTopics();
        const topicList = topicRes.data;
        setTopics(topicList);

        const grouped = {};

        for (const topic of topicList) {
          const courseRes = await fetchCoursesByTopic(topic.name);
          grouped[topic.name] = courseRes.data;
        }

        setGroupedCourses(grouped);
      } catch (err) {
        console.error("Failed to load courses", err);
      } finally {
        setLoading(false);
      }
    }

    loadCourses();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center dark:text-white">
        Loading courses...
      </div>
    );
  }

  return (
    <div className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory no-scrollbar">
      {topics.map((topic) => (
        <section
          key={topic.topicId}
          className="snap-start flex flex-col gap-4 px-4 py-8
                     bg-white dark:bg-black dark:text-white"
        >
          <h2 className="text-2xl font-bold border-l-4 pl-4
                         border-blue-500 dark:border-blue-300">
            {topic.name}
          </h2>

          {groupedCourses[topic.name]?.length > 0 ? (
            <Carousel items={groupedCourses[topic.name]} />
          ) : (
            <p className="opacity-60 px-4">No courses available</p>
          )}
        </section>
      ))}
    </div>
  );
}
