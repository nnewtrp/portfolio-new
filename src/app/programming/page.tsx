'use client'
import { Divider } from "@mui/material"
import styles from "./page.module.css"
import skillList from "./skills.json"

export default function Education() {
  return (
    <>
      {skillList.map((header) => (
        <div key={header.title} className={styles.mainContainer}>
          {/* Title */}
          <h1 className={styles.title}>{header.title}</h1>
          <Divider />
        </div>
      ))}
    </>
  )
}