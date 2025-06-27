import { useState } from "react";

function ContentCard() {
  const podcasts = [
  {
    title: "Fashion Content",
    image: "https://storyset.com/images/illustrations/shopping-rafiki.svg",
    prompts: [
      "Top 5 Summer Outfits",
      "OOTD transitions for Reels",
      "Behind the scenes of a photoshoot",
    ],
  },
  {
    title: "Travel Content",
    image: "https://storyset.com/images/illustrations/traveling-rafiki.svg",
    prompts: [
      "Day in My Travel Bag",
      "Hidden Gems in [Location]",
      "Before vs After Travel Glow",
    ],
  },
  {
    title: "Daily Vlogs",
    image: "https://storyset.com/images/illustrations/video-creator-rafiki.svg",
    prompts: [
      "My Realistic Morning Routine",
      "Unfiltered Day in My Life",
      "Things I’m Grateful for Today",
    ],
  },
  {
    title: "Educational Content",
    image: "https://storyset.com/images/illustrations/online-learning-rafiki.svg",
    prompts: [
      "3 Tips to Learn Faster",
      "Explain a Complex Topic Simply",
      "My Study Setup Breakdown",
    ],
  },
  {
    title: "Fitness Content",
    image: "https://storyset.com/images/illustrations/fitness-rafiki.svg",
    prompts: [
      "My Full-Body Routine",
      "What I Eat in a Day – Fitness Edition",
      "Transformation Progress Reel",
    ],
  },
];


  const [activeIndex, setActiveIndex] = useState(null);

  const togglePrompts = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-white px-6 py-12 overflow-hidden mt-[6rem]">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Explore Niche-Based Content Ideas
      </h2>

      <div className="flex gap-6 overflow-x-auto overflow-y-hidden no-scrollbar flex-nowrap w-full">
        {podcasts.map((item, index) => (
          <div
            key={index}
            className="relative bg-white min-w-[22rem] p-6 rounded-[1.5rem] shadow-xl flex-shrink-0 transition-transform hover:scale-105"
          >
            <h2 className="text-2xl font-extrabold mb-4 text-gray-800">
              {item.title}
            </h2>

            {/* Attractive, centered button */}
            <div className="flex justify-center mb-4">
              <button
                onClick={() => togglePrompts(index)}
                className={`bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-transform duration-300 ${
                  activeIndex === index ? "scale-95" : ""
                }`}
              >
                {activeIndex === index ? "Hide Prompts" : "🚀 Open Project"}
              </button>
            </div>

            <img
              src={item.image}
              alt={item.title}
              className="rounded-xl w-full h-[21rem] object-cover"
            />

            {/* Prompt box with clean styling */}
            <div
              className={`transition-all duration-500 overflow-hidden mt-4 rounded-xl shadow-inner bg-gray-50 px-4 py-4 ${
                activeIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <h3 className="text-lg font-semibold text-purple-600 mb-3">
                Suggested Prompts:
              </h3>
              <div className="space-y-2 text-gray-700 text-sm">
                {item.prompts.map((prompt, i) => (
                  <div
                    key={i}
                    className="bg-white p-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
                  >
                    {prompt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentCard;
