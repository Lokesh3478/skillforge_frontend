import Header from "../components/Header";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CourseThumbnail from "../components/CourseThumbnail";
import { useState, useEffect } from "react";
import { fetchAllCourses } from "../api/services/course";


export default function LandingPage() {
  const [courses, setCourses] = useState([]);
  const [index, setIndex] = useState(0);
  console.log(courses);
  useEffect(() => {
    fetchAllCourses()
      .then(res => setCourses(res.data))
      .catch(() => setCourses([]));
  }, []);

  useEffect(() => {
    if (courses.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % courses.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [courses.length]);

  // AUTO SLIDE EVERY 2.5 SECONDS
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % courses.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [courses.length]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Header />

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 gap-10">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl font-bold mb-6">
            Adaptive Learning Powered by AI
          </h1>

          <p className="text-lg opacity-80 mb-8">
            Personalized learning journeys backed by real-time analytics.
          </p>

          <Link
            to="/signup"
            className="px-6 py-3 rounded-2xl shadow-md bg-black dark:bg-white text-white dark:text-black font-semibold transition-colors duration-300"
          >
            Get Started
          </Link>
        </motion.div>

        {/* RIGHT — AUTO-SLIDING CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2"
        >
          <div className="relative p-8 rounded-3xl bg-white/5 dark:bg-white/10 
            backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden h-[360px] flex items-center justify-center">

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -40 }}
              transition={{ duration: 0.6 }}
              className="absolute"
            >
              {courses.length > 0 && (
                <CourseThumbnail
                  course={courses[index]}
                  isCenter={true}
                />
              )}


            </motion.div>

          </div>
        </motion.div>

      </section>

      {/* FEATURES SECTION */}
      <section className="px-8 md:px-16 py-16 grid md:grid-cols-4 gap-10">
        <FeatureCard
          title="Adaptive Tests"
          desc="Dynamic question sets tailored to skill level filling knowledge gaps."
        />
        <FeatureCard
          title="AI Generated Questions"
          desc="Automatically create diverse question types for comprehensive assessments."
        />
        <FeatureCard
          title="Insights Dashboard"
          desc="Track progress with visual analytics and personalized recommendations."
        />
        <FeatureCard
          title="Collected Roadmaps"
          desc="Sequenced learning of courses curated from top resources."
        />
      </section>

      <Footer />
    </div>
  );
}
