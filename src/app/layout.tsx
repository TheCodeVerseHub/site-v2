import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeVerse Hub",
  description: "A community for developers to learn, share, and grow together.",
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
