import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-3xl bg-white/10 dark:bg-white/10 
        backdrop-blur-xl shadow-2xl border border-white/20"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Welcome Back
        </h2>

        <form className="flex flex-col gap-5" action={"/dashboard"}>

          <div>
            <label className="text-sm opacity-80">Email</label>
            <input
              type="email"
              className="w-full p-3 mt-1 rounded-xl bg-white/20 border border-white/30
              placeholder-white/50 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm opacity-80">Password</label>
            <input
              type="password"
              className="w-full p-3 mt-1 rounded-xl bg-white/20 border border-white/30
              placeholder-white/50 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 p-3 rounded-xl bg-black dark:bg-white 
            text-white dark:text-black font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 opacity-70">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
