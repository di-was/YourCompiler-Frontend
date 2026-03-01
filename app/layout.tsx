import type { Metadata } from "next";
import "./globals.css";
import LanguageContextProvider from "@/contexts/Language/LanguageContextProvider";
import ExecutionContextProvider from "@/contexts/Execution/ExecutionContextProvider";
import LanguageConfigContextProvider from "@/contexts/LanguageConfig/LanguageConfigContextProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageConfigContextProvider>
          <LanguageContextProvider>
            <ExecutionContextProvider>
              {children}
            </ExecutionContextProvider>
          </LanguageContextProvider>
        </LanguageConfigContextProvider>
      </body>
    </html>
  );
}
