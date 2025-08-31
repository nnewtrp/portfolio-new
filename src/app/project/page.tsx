import ProjectPageClient from "./pageClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Personal Projects",
}

export default function ProjectPage() {
  return (
    <ProjectPageClient />
  )
}