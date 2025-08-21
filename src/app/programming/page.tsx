'use client'
import { Divider } from "@mui/material"
import styles from "./page.module.css"
import skillList from "./skills.json"

export default function ProgrammingPage() {
  return (
    <>
      {skillList.map((header) => (
        <div key={header.title} className={styles.mainContainer}>
          {/* Title */}
          <h1 className={styles.title}>{header.title}</h1>
          <Divider />

          {/* Items */}
          <div className={styles.itemContainer}>
            {header.items.map((item) => (
              <div key={item.name} className={styles.item}>
                {/* Image */}
                <div className={styles.imageContainer}>
                  {/* <img src={item.icon} alt={item.name} className={styles.image} /> */}
                </div>
                
                <Divider orientation="vertical" flexItem />

                {/* Text */}
                <div className={styles.textContainer}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}