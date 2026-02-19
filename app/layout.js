export const metadata = {
  title: "ClipNova",
  description: "Download TikTok videos without watermark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">
        {children}
      </body>
    </html>
  );
}
