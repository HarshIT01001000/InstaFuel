import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault(); // Prevent page reload
     const apiUrl = import.meta.env.URL;
    try {
      const response = await axios.post(
        `${apiUrl}login`,
        {
          email,
          password,
        }
      );  

      // Save token to localStorage
      localStorage.setItem("token", response.data.token);
      console.log("Login successful:", response.data);

      // Navigate to home or dashboard
      navigate("/dashboard"); // Change as per your route
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials or server error.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/51/29/07/5129075af0f53791c7563c8151d8d91a.jpg')",
      }}
    >
      <div className="w-full max-w-md backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 text-white">
        <h2 className="text-3xl font-extrabold text-center mb-8 drop-shadow-md">
          Welcome Back
        </h2>

        <form onSubmit={login} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1">
              Email address
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white/30 hover:bg-white/40 text-white font-semibold py-3 rounded-xl backdrop-blur border border-white/30 shadow-md transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/80">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-white font-semibold underline hover:text-white/90 transition"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
