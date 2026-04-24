import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "swgoh.ai",
  description: "Твой ИИ-советник по SWGOH",
};

// Запрещаем зум и масштабирование на мобилках
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
    // select-none отключает выделение объектов на сайте
    // overflow-hidden и fixed убирают "резиновый" скролл на iOS
    <html lang="ru" className="h-full overflow-hidden select-none fixed inset-0">
      <body className="bg-white text-black antialiased h-full overflow-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
