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
  title: "Hitanimes55 | Frontend Developer & UI Designer",
  description:
    "Portfolio of Reddaiah Dasuri, a passionate Frontend Developer and UI Designer crafting beautiful digital experiences.",
  keywords: [
    "frontend developer",
    "UI designer",
    "React",
    "Next.js",
    "portfolio",
    "Reddaiah Dasuri",
    "Hitanimes55",
  ],
  authors: [{ name: "Reddaiah Dasuri" }],
  openGraph: {
    title: "Hitanimes55 | Frontend Developer & UI Designer",
    description:
      "Portfolio of Reddaiah Dasuri, a passionate Frontend Developer and UI Designer crafting beautiful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
