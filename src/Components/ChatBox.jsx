import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function ChatBox() {
  const [messages, setMessages] = useState([
    { text: "It's over Anakin, I have the high ground.", side: "start" },
    { text: "You underestimate my power!", side: "end" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { text: input, side: "end" }]);
    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen bg-base-300 text-black flex flex-col justify-between">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className={`flex ${msg.side === "end" ? "justify-end" : "justify-start"}`}
            initial={{ x: msg.side === "start" ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl shadow-md ${
                msg.side === "start"
                  ? "bg-white text-black rounded-bl-none"
                  : "bg-primary text-white rounded-br-none"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="bg-base-200 p-4 flex items-center gap-2 border-t border-white/10">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-xl bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-focus transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
