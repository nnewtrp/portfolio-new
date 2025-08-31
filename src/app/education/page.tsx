import EducationPageClient from "./pageClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Education",
}

export default function EducationPage() {
  return (
    <EducationPageClient />
  )
}