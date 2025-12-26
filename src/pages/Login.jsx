import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import authService from "../api/services/auth";
import { getToken,setToken,clearToken } from "../utils/token";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const roles = ["student", "instructor", "admin"];
  const [role, setRole] = useState("student");
  const [invalidEmail, setInvalidEmail] = useState(false);
  let errorMessage = "";
  const [invalidPassword, setInvalidPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (email, password, role) => {
    try {
      const response = await authService.login({ email, password, role });

      const { token } = response.data;
      setToken(token);

      const navigateTo =
        role === "student"
          ? "/student/dashboard"
          : role === "instructor"
          ? "/instructor/dashboard"
          : "/admin/dashboard";
      console.log(response);
      console.log("Navigating to:", navigateTo);
      navigate(navigateTo);
    } catch (error) {
      console.error("Login failed:", error);
      errorMessage = (error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  const topRoles = roles.filter((r) => r !== role);

  return (
    <div className="min-h-screen flex items-start justify-center bg-white dark:bg-black text-black dark:text-white px-5 pt-10">
      
      <div className="absolute top-6 flex gap-4">
        {topRoles.map((r) => (
          <button
            key={r}
            onClick={() =>{ setRole(r)}}
            className="px-4 py-2 rounded-xl border border-white/40 
              bg-white/10 backdrop-blur-lg hover:bg-white/20 transition"
          >
            Login as {r.charAt(0).toUpperCase() + r.slice(1)}
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-3xl bg-white/10 dark:bg-white/10 
        backdrop-blur-xl shadow-2xl border border-white/20 mt-20"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Login as {role.charAt(0).toUpperCase() + role.slice(1)}
        </h2>

        <form className="flex flex-col gap-5" onSubmit={(e)=>{
          e.preventDefault();
          handleLogin(email,password,role);
        }}>
           {errorMessage && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
          <div>
            <label className="text-sm opacity-80">Email</label>
            <input
              type="email"
              className="w-full p-3 mt-1 rounded-xl bg-white/20 border border-white/30
              placeholder-white/50 focus:outline-none"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm opacity-80">Password</label>
            <input
              type="password"
              className="w-full p-3 mt-1 rounded-xl bg-white/20 border border-white/30
              placeholder-white/50 focus:outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 p-3 rounded-xl bg-black dark:bg-white 
            text-white dark:text-black font-semibold hover:opacity-90 transition"
          >
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
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
