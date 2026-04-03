import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Chen | Frontend Developer & UI Designer",
  description:
    "Portfolio of Alex Chen, a frontend developer and UI designer crafting beautiful digital experiences.",
  keywords: [
    "frontend developer",
    "UI designer",
    "React",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    title: "Alex Chen | Frontend Developer & UI Designer",
    description:
      "Portfolio of Alex Chen, a frontend developer and UI designer crafting beautiful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="noise-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
