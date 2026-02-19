"use client";
import { useState } from 'react';
import { Download, Link2, Zap } from 'lucide-react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url) return alert("حط الرابط أولا!");
    setLoading(true);
    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (data.downloadUrl) {
        window.open(data.downloadUrl, '_blank');
      } else {
        alert("عذرًا، لم نتمكن من استخراج الفيديو");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
          ClipNova
        </h1>
        <p className="text-zinc-400 mb-10">Download TikTok & Reels in HD</p>
        
        <div className="bg-zinc-900 p-2 rounded-2xl border border-zinc-800 flex flex-col md:flex-row gap-2">
          <input 
            className="flex-1 bg-transparent p-4 outline-none"
            placeholder="Paste link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button 
            onClick={handleDownload}
            disabled={loading}
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Download"}
          </button>
        </div>
      </div>
    </main>
  );
}
