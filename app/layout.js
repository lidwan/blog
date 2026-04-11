import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://lsblk.dev"),
  title: "Loay's Blog",
  description: "Loay Idwan's Blog, Sharing thoughts on tech, coding, and open source.",
  keywords: "Loay Idwan, blog, technology, coding, open source, programming, web development",
  author: "Loay Idwan",
  creator: "Loay Idwan",
  publisher: "Loay Idwan",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Loay's Blog",
    siteName: "Loay's Blog",
    description: "Loay Idwan's Blog, Sharing thoughts on tech, coding, and open source.",
    url: "https://lsblk.dev",
    type: "website",
    images: [
      {
        url: "https://lsblk.dev/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Website for Loay Idwan's Blog, Sharing thoughts on tech, coding, and open source.",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
