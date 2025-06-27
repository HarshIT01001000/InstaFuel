import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="flex pt-[10rem] justify-between flex-col md:flex-row gap-6 px-4 md:px-16">
        {/* Left Text Content */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold text-black leading-tight">
            Supercharge Your <br /> Content Creation <br /> with AI Ideas
          </h1>
          <p className="text-lg text-gray-700 mt-6 mb-6">
            Instantly generate Reel ideas, captions, trending hashtags, and audio based on your niche — all powered by AI.
          </p>

          {/* Chat Now Button */}
          <Link to={"/ChatBox"}>
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition duration-300">
              🚀 Get Ideas Now
            </button>
          </Link>
        </div>

        {/* Right Illustration */}
        <div className="hidden md:block w-[40%]">
          <img
            src="https://i.pinimg.com/736x/6d/3f/e8/6d3fe8746c113a5628ae094c87b4f8dc.jpg"
            alt="Reel AI Illustration"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Main Card Section */}
      <div className="p-6 bg-white rounded-xl shadow-lg max-w-6xl mx-auto mt-16 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reel Idea Generator */}
          <div className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-4 transition-all duration-300 group-hover:translate-x-1">
              <div className="bg-white rounded-full p-3 group-hover:scale-110 transition-transform">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3449/3449611.png"
                  alt="Idea Icon"
                  className="w-8 h-8"
                />
              </div>
              <h2 className="text-xl font-semibold">Reel Idea Generator</h2>
            </div>
            <p className="mb-4 transition-opacity group-hover:opacity-90">
              Get fresh and trending reel ideas in seconds, personalized for your niche.
            </p>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition">
              Generate Ideas
            </button>
          </div>

          {/* Smart Captions + Hashtags */}
          <div className="group bg-gradient-to-r from-pink-500 to-rose-400 text-white p-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-4 transition-all duration-300 group-hover:translate-x-1">
              <div className="bg-white rounded-full p-3 group-hover:scale-110 transition-transform">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                  alt="Caption Icon"
                  className="w-8 h-8"
                />
              </div>
              <h2 className="text-xl font-semibold">Captions & Hashtags</h2>
            </div>
            <p className="mb-4 transition-opacity group-hover:opacity-90">
              Create scroll-stopping captions and discover hashtags with the highest engagement.
            </p>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition">
              Create Captions
            </button>
          </div>
        </div>

        {/* Bottom Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm font-medium text-gray-700">
          {[
            {
              title: 'Discover Trending Audio',
              desc: 'Get the latest viral tracks for your niche.',
            },
            {
              title: 'Boost Content Reach',
              desc: 'Use AI to predict what will engage your audience.',
            },
            {
              title: 'Save Time & Stay Consistent',
              desc: 'Never run out of content ideas again.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl py-4 px-2 hover:bg-gray-200 transition"
            >
              <p className="text-indigo-600 font-bold">{item.title}</p>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
