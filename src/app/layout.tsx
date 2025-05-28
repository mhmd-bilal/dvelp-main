import type { Metadata } from "next";
import { Manrope, Geist_Mono, DM_Serif_Display, Leckerli_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Transition from "@/app/transtion";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const leckerli = Leckerli_One({
  variable: "--font-leckerli-cursive",
  subsets: ["latin"],
  weight: "400"
});


const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dvelp",
  description: "dev help by bilal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable} ${leckerli.variable} antialiased md:overflow-y-hidden `}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Transition>{children}</Transition>
        </ThemeProvider>
      </body>
    </html>
  );
}
