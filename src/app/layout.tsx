import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import NavBar from "@/components/layouts/NavBar"
import Footer from "@/components/layouts/Footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Teerapat Satitporn',
    default: "Teerapat Satitporn | Portfolio"
  },
  description: "Teerapat Satitporn Portfolio Website",
  generator: "Next.js",
  applicationName: "portfolio-new",
  keywords: ["Teerapat Satitporn", "nnewtrp", "Teerapat", "Satitporn", "Portfolio"],
  authors: [{ name: "Teerapat Satitporn" }],
  creator: "Teerapat Satitporn"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          {/* Nav Bar */}
          <NavBar />
          <div style={{ marginTop: '64px' }} />

          {/* Body */}
          {children}

          {/* Footer */}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
