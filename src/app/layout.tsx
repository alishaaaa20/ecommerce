import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Headers from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const ProgressBar = dynamic(() => import("@/components/ProgressBar"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "CaptivatingCurves",
  description: "A clothing store for traditional and modern wear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ProgressBar />
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  );
}
