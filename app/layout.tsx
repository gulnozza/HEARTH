import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StartupFooter from "@/components/landing/StartupFooter";
import EmergencyButton from "@/components/EmergencyButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hearth — AI Safety Intelligence for Tashkent",
  description:
    "One map for every street you walk. AI-powered safety scores, incident classification, and safe routes for Tashkent, Uzbekistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-forest">
        <Navbar />
        <main className="flex-1">{children}</main>
        <StartupFooter />
        <EmergencyButton />
      </body>
    </html>
  );
}
