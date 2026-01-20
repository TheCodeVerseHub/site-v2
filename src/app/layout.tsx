import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://codeversehub.com'), // Replace with your actual domain
  title: {
    default: "CodeVerse Hub",
    template: "%s | CodeVerse Hub",
  },
  description: "A community for developers to learn, share, and grow together. Join us to collaborate on projects and master new skills.",
  keywords: ["CodeVerse Hub", "Coding Community", "Learn to Code", "Developer Resources", "Programming", "Open Source", "Software Development"],
  authors: [{ name: "CodeVerse Hub Team" }],
  openGraph: {
    title: "CodeVerse Hub",
    description: "A community for developers to learn, share, and grow together.",
    url: 'https://codeversehub.com',
    siteName: 'CodeVerse Hub',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeVerse Hub',
    description: 'A community for developers to learn, share, and grow together.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
