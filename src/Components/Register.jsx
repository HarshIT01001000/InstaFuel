import axios from "axios";
import { useState } from "react";
import * as yup from "yup";

// ✅ Yup schema for validation
const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  age: yup.number().min(13, "Minimum age is 13").required("Age is required"),
  content: yup.string().required("Content type is required"),
  instaId: yup.string().notRequired(),
});

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [age, setage] = useState("");
  const [content, setcontent] = useState("");
  const [instaId, setinstaId] = useState("");
  const [errors, setErrors] = useState({});

  const register = async (e) => {
    e.preventDefault();
    const formData = { name, email, password, age, content, instaId };

    try {
      await registerSchema.validate(formData, { abortEarly: false });
      setErrors({});

      const response = await axios.post("https://backendprojectnew.onrender.com/api/auth/register", formData);
      console.log("Registration successful:", response.data);
      alert("Registration Successful!");
    } catch (err) {
      if (err.name === "ValidationError") {
        const validationErrors = {};
        err.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
      } else {
        console.error("Registration failed:", err);
        alert("Something went wrong during registration.");
      }
    }
  };

  return (
    <div className="fixed overflow-y-auto inset-0">
      {/* Background image with dark overlay */}
      <div
        className="ld:h-[55rem] h-[60rem] absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/51/29/07/5129075af0f53791c7563c8151d8d91a.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Registration Form */}
      <div className="relative z-10 flex items-center justify-center w-full h-full p-4 mt-[3rem]">
        <div className="w-full max-w-2xl backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl px-10 py-8 text-white">
          <h2 className="text-3xl font-extrabold text-center mb-10 drop-shadow-md">
            Create Your Account
          </h2>

          <form className="space-y-6" onSubmit={register}>
            {/* Name */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-white/80">
                Name<span className="text-red-400">*</span>
              </label>
              <input
                onChange={(e) => setname(e.target.value)}
                value={name}
                type="text"
                placeholder="Your Full Name"
                className="px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white"
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
            </div>

            {/* Content Type */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-white/80">
                Type of Content<span className="text-red-400">*</span>
              </label>
              <input
                onChange={(e) => setcontent(e.target.value)}
                value={content}
                type="text"
                placeholder="e.g. Vlogs, Tech"
                className="px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white"
              />
              {errors.content && <p className="text-red-400 text-sm">{errors.content}</p>}
            </div>

            {/* Instagram ID */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-white/80">Instagram ID</label>
              <input
                onChange={(e) => setinstaId(e.target.value)}
                value={instaId}
                type="text"
                placeholder="@yourhandle"
                className="px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-white/80">
                Email ID<span className="text-red-400">*</span>
              </label>
              <input
                onChange={(e) => setemail(e.target.value)}
                value={email}
                type="email"
                placeholder="you@example.com"
                className="px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-white/80">
                Password<span className="text-red-400">*</span>
              </label>
              <input
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                type="password"
                placeholder="••••••••"
                className="px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white"
              />
              {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
            </div>

            {/* Age */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-white/80">
                Age<span className="text-red-400">*</span>
              </label>
              <input
                onChange={(e) => setage(e.target.value)}
                value={age}
                type="number"
                placeholder="Your Age"
                className="px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white"
              />
              {errors.age && <p className="text-red-400 text-sm">{errors.age}</p>}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-white/30 hover:bg-white/40 text-white font-semibold py-3 rounded-xl border border-white/30 shadow-md transition duration-300"
            >
              Register
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-white/80">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-white font-semibold underline hover:text-white/90 transition"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
