import ActivityPageClient from "./pageClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Other Activities",
}

export default function ActivityPage() {
  return (
    <ActivityPageClient />
  )
}