import ProgrammingPageClient from "./pageClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programming Skills",
}

export default function ProgrammingPage() {
  return (
    <ProgrammingPageClient />
  )
}