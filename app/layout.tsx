import "./globals.css";

import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { cn } from "@/lib/utils";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Style",
  description:
    "Personal (emrocode) design system, layout blocks, and theme primitives for shadcn/ui.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", "font-sans", archivo.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
