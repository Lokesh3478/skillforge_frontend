import { motion } from "framer-motion";

export default function FeatureCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-900 shadow-md text-center"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="opacity-80">{desc}</p>
    </motion.div>
  );
}