import type { Metadata } from "next";
import {Outfit} from 'next/font/google';
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";


const outfit=Outfit({subsets:['latin']})

export const metadata: Metadata = {
  title: "VizBoard.ai",
  description: "Visualise Your Docx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-secondary",outfit.className)}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
