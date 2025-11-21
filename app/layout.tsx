import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CustomCursor } from "@/components/custom-cursor"
import { AjaxTransition } from "@/components/ajax-transition"
import { PageLoader } from "@/components/page-loader"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Hervin - Creative Portfolio Showcase",
  description:
    "Modern creative portfolio with minimalist design, smooth AJAX transitions, and stunning visual experiences. Specializing in web design, development, and digital branding.",
  keywords: ["portfolio", "creative", "design", "web development", "branding", "UI/UX", "digital agency"],
  authors: [{ name: "Hervin Creative Studio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hervin.com",
    title: "Hervin - Creative Portfolio Showcase",
    description: "Modern creative portfolio with minimalist design and smooth transitions",
    siteName: "Hervin Creative Studio",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#00adb5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              ga('create', 'UA-XXXXX-Y', 'auto');
              ga('send', 'pageview');
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-[#f8f8f8]`}>
        <PageLoader />
        <CustomCursor />
        <AjaxTransition>{children}</AjaxTransition>
        <Analytics />
      </body>
    </html>
  )
}
