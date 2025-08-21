import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Box, AppBar, Toolbar, Typography } from "@mui/material"
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
  title: "Teerapat Satitporn - Welcome to my portfolio website",
  description: "Teerapat Satitporn Portfolio Website",
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
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="info" sx={{ backgroundColor: 'black' }}>
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <b>Teerapat Satitporn</b>
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>

          {/* Body */}
          {children}

          {/* Footer */}
          <div style={{ flex: 1 }} />
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
