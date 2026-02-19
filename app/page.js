"use client";

import { useState } from "react";
import { Download } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState("");

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-5xl font-extrabold mb-6">
          CLIP<span className="text-green-500">NOVA</span>
        </h1>

        <p className="text-zinc-400 mb-8">
          Download TikTok, Reels & Shorts in HD
        </p>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Paste video link..."
            className="flex-1 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 outline-none"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-lg flex items-center gap-2">
            <Download size={18} />
            Download
          </button>
        </div>
      </div>
    </main>
  );
}
