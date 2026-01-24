import type { Metadata } from "next";
import "./globals.css";
import LanguageContextProvider from "@/contexts/Language/LanguageContextProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageContextProvider>
          {children}
        </LanguageContextProvider>
        
      </body>
    </html>
  );
}
