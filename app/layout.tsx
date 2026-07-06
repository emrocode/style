import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const fontSans = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Style",
  description:
    "Personal (emrocode) design system, layout blocks, and theme primitives for shadcn/ui.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
