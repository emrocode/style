import "./globals.css";

import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", archivo.variable)}
    >
      <Head>
        <Script
          id="umbra"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </Head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
