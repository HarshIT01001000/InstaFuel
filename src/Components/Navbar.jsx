import { Navigate, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem("token"); 
    navigate("/")
  }
  return (
    <section className="relative flex items-center justify-between">
      {/* Top Right Buttons */}
      <div className="absolute top-6 right-10 flex items-center gap-4 animate-fade-in-right">
        <button className="bg-transparent text-black font-medium hover:text-purple-700 transition duration-300 ease-in-out hover:scale-105">
          What's new
        </button>
        <button onClick={logout} className="border border-purple-500 text-purple-600 px-4 py-1 rounded-xl hover:bg-purple-100 transition duration-300 ease-in-out hover:scale-105">
          LogOut
        </button>
      </div>

      {/* Top Left Logo and Navigation */}
      <div className="absolute top-6 left-10 flex items-center gap-2 animate-fade-in-left">
        <div className="w-8 h-8 rounded-xl bg-purple-200 flex items-center justify-center animate-bounce-slow">
          <span className="text-purple-800 font-bold">📈</span>
        </div>
        <h1 className="font-bold text-lg text-purple-900 transition duration-300 hover:text-purple-600">
          InstaFuel
        </h1>

        <div className="ml-6 space-x-4 hidden md:inline">
          <button className="text-gray-700 hover:text-purple-700 transition duration-300 hover:scale-105">
            Tools
          </button>
          <button className="text-gray-700 hover:text-purple-700 transition duration-300 hover:scale-105">
            Features
          </button>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
