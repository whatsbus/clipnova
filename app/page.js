"use client";
import { useState } from 'react';
import { Download, Link2, Zap, Shield, Smartphone } from 'lucide-react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleDownload = async () => {
    if (!url) return;
    setStatus('loading');
    
    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      const data = await response.json();
      
      if (data.downloadUrl) {
        window.location.href = data.downloadUrl;
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-black">
            <Zap size={18} fill="currentColor" />
          </div>
          CLIP<span className="text-green-500">NOVA</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pt-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          Download HD Clips
        </h1>
        <p className="text-zinc-400 text-lg mb-10">TikTok, Reels & Shorts • No Watermark • 100% Free</p>

        {/* Input Area */}
        <div className="bg-zinc-900/50 backdrop-blur-xl p-3 rounded-2xl border border-zinc-800 shadow-2xl max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 gap-3 bg-black rounded-xl border border-zinc-800 focus-within:border-green-500 transition">
              <Link2 className="text-zinc-500" size={20} />
              <input 
                type="text" 
                placeholder="Paste video link here..." 
                className="w-full bg-transparent py-4 outline-none text-sm"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <button 
              onClick={handleDownload}
              disabled={status === 'loading'}
              className="bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black font-bold px-8 py-4 rounded-xl transition flex items-center justify-center gap-2"
            >
              {status === 'loading' ? 'Processing...' : <><Download size={20} /> Download</>}
            </button>
          </div>
        </div>

        {/* Info Tags */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-zinc-500 text-sm">
          <div className="flex items-center gap-2"><Shield size={16}/> Secure</div>
          <div className="flex items-center gap-2"><Smartphone size={16}/> Mobile Ready</div>
          <div className="flex items-center gap-2"><Zap size={16}/> Fast</div>
        </div>
      </div>
    </main>
  );
}
