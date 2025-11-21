import { motion } from "framer-motion";

export default function CourseThumbnail({ image, title, duration, isCenter }) {

  const handleClick = () => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    window.history.pushState({}, "", `/courses/${slug}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

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
      <div className="h-40 w-full rounded-xl overflow-hidden mb-4 shadow-md">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm opacity-70">{duration}</p>
    </motion.button>
  );
}
