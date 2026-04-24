import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-[#f5f5f7] text-black antialiased">
        {children}
      </body>
    </html>
  );
}
