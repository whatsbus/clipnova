"use client";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-black via-zinc-900 to-black text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Download TikTok Videos Without Watermark
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Fast • Free • HD Quality • No Login Required
        </p>

        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
          <input
            type="text"
            placeholder="Paste TikTok link here..."
            className="w-full p-4 rounded-xl text-black"
          />
          <button className="w-full mt-4 bg-green-500 hover:bg-green-600 p-4 rounded-xl font-bold">
            Download Now
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose ClipNova?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-4">No Watermark</h3>
            <p>
              Remove TikTok watermark automatically and download clean HD videos.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-4">High Quality</h3>
            <p>
              Download videos in Full HD resolution without losing quality.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-4">Unlimited & Free</h3>
            <p>
              No limits, no signup, no hidden fees. 100% free forever.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          How To Download TikTok Videos
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <p><b>Step 1:</b> Copy the TikTok video link.</p>
          <p><b>Step 2:</b> Paste the link into ClipNova.</p>
          <p><b>Step 3:</b> Click Download and save the video.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold">Is ClipNova free?</h3>
            <p>Yes, ClipNova is completely free and unlimited.</p>
          </div>

          <div>
            <h3 className="font-bold">Do I need to install an app?</h3>
            <p>No. It works directly in your browser.</p>
          </div>

          <div>
            <h3 className="font-bold">Can I download private videos?</h3>
            <p>No. Only public TikTok videos are supported.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-8">
        <p>© 2026 ClipNova. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">
          We are not affiliated with TikTok or ByteDance.
        </p>
      </footer>

    </main>
  );
}
