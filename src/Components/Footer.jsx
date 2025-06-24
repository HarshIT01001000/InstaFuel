function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Info */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/725/725291.png"
              alt="Logo"
              className="w-10 h-10"
            />
            <h1 className="text-xl font-bold">InstaFuel</h1>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Preferences</li>
            <li className="text-xs mt-2 text-gray-500">
              © 2025 Content Spark. All rights reserved.
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h2 className="font-semibold mb-3">Tools</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Reel Idea Generator</li>
            <li>Caption Enhancer</li>
            <li>Hashtag Finder</li>
            <li>Trending Audio Suggester</li>
          </ul>
        </div>

        {/* For Creators */}
        <div>
          <h2 className="font-semibold mb-3">For Creators</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Instagram Growth Tips</li>
            <li>Content Strategy Guide</li>
            <li>Weekly Trend Reports</li>
            <li>Reel Monetization Help</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="font-semibold mb-3">Support</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Submit Feedback</li>
            <li>Join Our Creator Community</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
