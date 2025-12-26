import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import authService from "../api/services/auth"

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await authService.register({
        ...formData,
        role: "STUDENT"   
      });

      const { token } = response.data;
      localStorage.setItem("token", token);

      navigate("/student/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-3xl bg-white/10 dark:bg-white/10 
        backdrop-blur-xl shadow-2xl border border-white/20"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create Your Account
        </h2>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          
          <div>
            <label className="text-sm opacity-80">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded-xl bg-white/20 border border-white/30
              placeholder-white/50 focus:outline-none"
              placeholder="User Name"
              required
            />
          </div>

          <div>
            <label className="text-sm opacity-80">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded-xl bg-white/20 border border-white/30
              placeholder-white/50 focus:outline-none"
              placeholder="name@domain.com"
              required
            />
          </div>

          <div>
            <label className="text-sm opacity-80">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded-xl bg-white/20 border border-white/30
              placeholder-white/50 focus:outline-none"
              placeholder="********"
              required
            />
          </div>

          <div>
            <label className="text-sm opacity-80">Mobile Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded-xl bg-white/20 border border-white/30
              placeholder-white/50 focus:outline-none"
              placeholder="+91 98765 43210"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 p-3 rounded-xl bg-black dark:bg-white 
            text-white dark:text-black font-semibold hover:opacity-90 transition"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-6 opacity-70">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
