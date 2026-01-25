import type { Metadata } from "next";
import "./globals.css";
import LanguageContextProvider from "@/contexts/Language/LanguageContextProvider";
import ExecutionContextProvider from "@/contexts/Execution/ExecutionContextProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageContextProvider>
          <ExecutionContextProvider>
            {children}
          </ExecutionContextProvider>
        </LanguageContextProvider>
        
      </body>
    </html>
  );
}
