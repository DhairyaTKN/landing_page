import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Bruno_Ace_SC, Prompt } from "next/font/google";
import "./globals.css";
import './index.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400"
});

const bruno = Bruno_Ace_SC({
  variable: "--font-bruno",
  subsets: ["latin"],
  weight: "400"
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: "400"
})
const montserrat = Prompt({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${bruno.variable} ${prompt.variable} ${montserrat.variable} antialiased`}
      >
        {children} 
      </body>
    </html>
  );
}
