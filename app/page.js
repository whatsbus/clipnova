"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black text-white">

      <div className="w-full max-w-2xl px-6 text-center">

        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          ClipNova
        </h1>

        <p className="text-zinc-400 mb-10 text-lg">
          Download TikTok, Reels & Shorts in HD – Fast & Clean
        </p>

        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste video link here..."
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-green-400 transition"
          />

          <button
            className="w-full mt-4 p-4 rounded-xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 hover:scale-105 transition transform"
          >
            Download
          </button>

        </div>

        <div className="mt-8 text-sm text-zinc-500">
          No watermark • No login • 100% Free
        </div>

      </div>

    </main>
  );
}
