import HomePageClient from "./pageClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Teerapat Satitporn — Welcome to my portfolio website",
}

export default function HomePage() {
  return (
    <HomePageClient />
  )
}