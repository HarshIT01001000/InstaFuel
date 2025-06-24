import axios from "axios"
import { useState } from "react"
function Register() {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [age, setage] = useState()
    const [content, setcontent] = useState()
    const [instaId, setinstaId] = useState()
    const register=async(e)=>{
        e.preventDefault();
        const apiUrl = process.env.URL;
        try {
            const response=await axios.post(`${apiUrl}register`,
                {
                    name,email,instaId,content,password,age
                }
            )
            console.log(response);
            
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/51/29/07/5129075af0f53791c7563c8151d8d91a.jpg')",
      }}
    >
      <div className="w-full max-w-2xl backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl px-10 py-12 text-white">
        <h2 className="text-3xl font-extrabold text-center mb-10 drop-shadow-md">
          Create Your Account
        </h2>

        <form className="space-y-6">
          {/* Row: Name */}
          <div className="flex items-center">
            <label className="w-40 text-sm font-medium text-white/80">Name<span className="text-red-400">*</span></label>
            <input
            onChange={e=>{setname(e.target.value)}}
            value={name}
              type="text"
              required
              placeholder="Your Full Name"
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            />
          </div>

          {/* Row: Content Type */}
          <div className="flex items-center">
            <label className="w-40 text-sm font-medium text-white/80">
              Type of Content<span className="text-red-400">*</span>
            </label>
            <input
             onChange={e=>{setcontent(e.target.value)}}
            value={content}
              type="text"
              required
              placeholder="e.g. Vlogs, Tech"
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            />
          </div>

          {/* Row: Insta ID (optional) */}
          <div className="flex items-center">
            <label className="w-40 text-sm font-medium text-white/80">
              Instagram ID
            </label>
            <input
             onChange={e=>{setinstaId(e.target.value)}}
            value={instaId}
              type="text"
              placeholder="@yourhandle"
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            />
          </div>

          {/* Row: Email */}
          <div className="flex items-center">
            <label className="w-40 text-sm font-medium text-white/80">Email ID<span className="text-red-400">*</span></label>
            <input
             onChange={e=>{setemail(e.target.value)}}
            value={email}
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            />
          </div>

          {/* Row: Password */}
          <div className="flex items-center">
            <label className="w-40 text-sm font-medium text-white/80">Password<span className="text-red-400">*</span></label>
            <input
             onChange={e=>{setpassword(e.target.value)}}
            value={password}
              type="password"
              required
              placeholder="••••••••"
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            />
          </div>

          {/* Row: Age */}
          <div className="flex items-center">
            <label className="w-40 text-sm font-medium text-white/80">Age<span className="text-red-400">*</span></label>
            <input
             onChange={e=>{setage(e.target.value)}}
            value={age}
              type="number"
              required
              placeholder="Your Age"
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            />
          </div>

          {/* Register Button */}
          <button
          onClick={register}
            type="submit"
            className="w-full mt-6 bg-white/30 hover:bg-white/40 text-white font-semibold py-3 rounded-xl border border-white/30 shadow-md transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-white/80">
          Already have an account?{" "}
          <a
            href="#"
            className="text-white font-semibold underline hover:text-white/90 transition"
          >
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
