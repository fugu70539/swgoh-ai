import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "swgoh.ai",
  description: "AI Advisor for SWGOH",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="select-none touch-none overflow-hidden bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
