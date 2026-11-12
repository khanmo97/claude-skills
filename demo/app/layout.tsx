import type { Metadata } from "next"
import { Fraunces, Geist } from "next/font/google"
import { WadaThemeSwitcher } from "@/components/wada-theme-switcher"
import "./globals.css"

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] })
const fraunces = Fraunces({ variable: "--font-serif", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lantern Moth Coffee",
  description: "A fictional neighborhood coffee roaster, used to demo Sanzo Wada themes.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <WadaThemeSwitcher />
      </body>
    </html>
  )
}
