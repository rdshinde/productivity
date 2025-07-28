import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Productivity - Your Ultimate Productivity Companion",
  description: "Meet Productivity—where AI meets intuition. Seamlessly blend task management, intelligent notes, smart scheduling, and personalized insights into one beautiful, unified workspace that adapts to your unique workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-apple bg-white text-gray-900 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
