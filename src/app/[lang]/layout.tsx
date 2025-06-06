import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import { Suspense } from "react";
import Loading from "@/app/app-loading";
import I18nProvider from "@/components/i18n/I18nProvider";
import { ThemeProvider } from "@/contexts/themes-context-provider";
import { Locale } from "@/lib/i18n/types";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickCart",
  description: "Generated by create next app",
};

export async function generateStaticParams() { return [{ lang: "en" }, { lang: "zh" }] }

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>
}>) {
  return (
    <html lang={(await params).lang} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <I18nProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
