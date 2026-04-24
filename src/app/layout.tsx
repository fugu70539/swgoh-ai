import "./globals.css"; // ПРОВЕРЬ ЭТУ СТРОКУ
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "swgoh.ai",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="h-full select-none overflow-hidden fixed inset-0">
      <body className="bg-white text-black antialiased h-full font-sans">
        {children}
      </body>
    </html>
  );
}
