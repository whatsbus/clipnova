import './globals.css'

export const metadata = {
  title: 'ClipNova - Downloader',
  description: 'Download videos without watermark',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
