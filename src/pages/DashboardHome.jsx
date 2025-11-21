import { useState, useEffect } from "react";
import CourseThumbnail from "../components/CourseThumbnail";

export default function DashboardHome() {
  const recommended = [
    { image: "/images/course1.jpg", title: "React Mastery", duration: "6 hrs" },
    { image: "/images/course2.jpg", title: "Data Science Basics", duration: "8 hrs" },
    { image: "/images/course3.jpg", title: "Python Bootcamp", duration: "10 hrs" },
  ];

  const enrolled = [
    { image: "/images/course4.jpg", title: "Web Dev Roadmap", progress: 40 },
    { image: "/images/course3.jpg", title: "AI Roadmap", progress: 10 },
    { image: "/images/course2.jpg", title: "DSA Roadmap", progress: 65 },
  ];

  const continueCourses = [
    { image: "/images/course1.jpg", title: "React Advanced", duration: "30%" },
    { image: "/images/course2.jpg", title: "ML Crash Course", duration: "55%" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % recommended.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-10">

      {/* WELCOME */}
      <h1 className="text-3xl font-bold">Welcome Back 👋</h1>

      {/* LEFT: Schedule  |  RIGHT: Recommended Carousel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Schedule / To-Do */}
        <div className="col-span-1 p-6 rounded-2xl bg-gray-100 dark:bg-gray-900 border dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3">Today's Schedule</h2>

          <ul className="space-y-3 opacity-80">
            <li>• Complete Module 3 of React Course</li>
            <li>• Attend AI Live Class at 7 PM</li>
            <li>• Review DSA practice problems</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">To-do List</h2>
          <ul className="space-y-2 opacity-80">
            <li>• Finish assignment</li>
            <li>• Watch ML lecture</li>
            <li>• Attempt quiz</li>
          </ul>
        </div>

        {/* Recommended Carousel */}
        <div className="col-span-2 p-6 rounded-2xl bg-gray-100 dark:bg-gray-900 border dark:border-gray-700 h-[260px] flex items-center justify-center relative overflow-hidden">
          
          <div className="absolute w-full h-full flex items-center justify-center">
            <CourseThumbnail
              key={index}
              image={recommended[index].image}
              title={recommended[index].title}
              duration={recommended[index].duration}
              isCenter={true}
            />
          </div>

        </div>
      </div>

      {/* ENROLLED ROADMAPS — Horizontal Scroll */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Your Roadmaps</h2>

        <div className="flex space-x-6 overflow-x-auto pb-2 no-scrollbar">
          {enrolled.map((e, i) => (
            <div
              key={i}
              className="min-w-[240px] p-4 rounded-2xl bg-gray-100 dark:bg-gray-900 border dark:border-gray-700"
            >
              <img src={e.image} className="rounded-xl mb-3" />
              <h3 className="font-semibold">{e.title}</h3>

              <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded mt-2">
                <div
                  className="h-2 bg-blue-500 rounded"
                  style={{ width: `${e.progress}%` }}
                ></div>
              </div>

              <p className="text-sm opacity-70 mt-1">{e.progress}% complete</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTINUE LEARNING */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Continue Learning</h2>

        <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-2">
          {continueCourses.map((c, i) => (
            <CourseThumbnail
              key={i}
              image={c.image}
              title={c.title}
              duration={c.duration}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
