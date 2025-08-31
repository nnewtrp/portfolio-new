import ExperiencePageClient from "./pageClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work Experience",
}

export default function ExperiencePage() {
  return (
    <ExperiencePageClient />
  )
}