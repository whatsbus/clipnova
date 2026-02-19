
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    if (!url) return alert("Paste a link!");

    setLoading(true);
    setVideo(null);

    const res = await fetch("/api/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setVideo(data.video);
    } else {
      alert("Error fetching video");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-green-400">
        ClipNova 🚀
      </h1>

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste TikTok/Shorts/Reels link"
        className="w-full max-w-lg p-4 rounded-lg text-black"
      />

      <button
        onClick={handleDownload}
        className="mt-4 w-full max-w-lg bg-green-400 p-4 font-bold text-black rounded-lg"
      >
        {loading ? "Processing..." : "Download"}
      </button>

      {video && (
        <a
          href={video}
          target="_blank"
          className="mt-6 bg-pink-600 px-6 py-4 rounded-lg font-bold"
        >
          DOWNLOAD HD
        </a>
      )}
    </main>
  );
}
