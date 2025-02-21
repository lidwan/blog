import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Loay's Blog",
  description: "Loay Idwan's Blog, Sharing thoughts on tech, coding, and open source.",
  keywords: "Loay Idwan, blog, technology, coding, open source, programming, web development",
  author: "Loay Idwan",
  creator: 'Loay Idwan',
  publisher: 'Loay Idwan',
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  og: {
    title: "Loay's Blog",
    description: "Loay Idwan's Blog, Sharing thoughts on tech, coding, and open source.",
    image: "https://blog.loayidwan.com/images/blog.png",
    url: "https://blog.loayidwan.com",
    type: "website",
  },
  canonical: "https://blog.loayidwan.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
