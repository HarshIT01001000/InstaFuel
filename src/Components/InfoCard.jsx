function InfoCard() {
  const data = [
    {
      title: "Niche-Based Reel Ideas",
      para:
        "Get fresh, trendy, and niche-specific reel ideas in seconds — perfect for fashion, travel, vlogs, fitness, education, and more.",
      image: "https://cdn-icons-png.flaticon.com/512/11452/11452682.png",
    },
    {
      title: "AI-Generated Captions",
      para:
        "Struggling with what to write? Let AI craft attention-grabbing captions tailored to your vibe and content tone.",
      image: "https://cdn-icons-png.flaticon.com/512/12505/12505064.png",
    },
    {
      title: "Viral Hashtag Suggestions",
      para:
        "Boost your discoverability with trending, high-performing hashtags that match your content category.",
      image: "https://cdn-icons-png.flaticon.com/512/2420/2420435.png",
    },
    {
      title: "Trending Audio Finder",
      para:
        "Discover the most viral reel audios — updated regularly to keep your content synced with trends.",
      image: "https://cdn-icons-png.flaticon.com/512/2922/2922688.png",
    },
    {
      title: "Content Calendar Support",
      para:
        "Plan your posts and content using our intelligent daily content calendar suggestions for consistency and growth.",
      image: "https://cdn-icons-png.flaticon.com/512/747/747310.png",
    },
  ];

  return (
    <div className="bg-white">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center justify-between px-4 md:px-20 py-10 gap-6`}
        >
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold mb-3 text-gray-900">
              {item.title}
            </h2>
            <p className="text-base text-gray-700">{item.para}</p>
          </div>

          {/* Colorful Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-w-xs md:max-w-sm rounded-2xl drop-shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoCard;
