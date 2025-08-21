'use client'
import { Divider } from "@mui/material"
import styles from "./page.module.css"
import projectList from "./projects.json"

export default function ProjectPage() {
  return (
    <>
      {projectList.map((header) => (
        <div key={header.title} className={styles.mainContainer}>
          {/* Title */}
          <h1 className={styles.title}>{header.title}</h1>
          <Divider />

          {/* Items */}
        </div>
      ))}
    </>
  )
}