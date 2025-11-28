import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"



export const metadata: Metadata = {
  title: "EliteWear - Premium Ecommerce",
  description: "Discover premium fashion with elegant design",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* <CHANGE> Added custom fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          @font-face {
            font-family: 'Sharp Grotesk';
            src: url('/fonts/SharpGrotesk.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Neue Montreal';
            src: url('/fonts/NueveMonreal.woff2') format('woff2');
          }
        `}</style>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
