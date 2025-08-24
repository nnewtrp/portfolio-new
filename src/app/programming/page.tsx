'use client'
import { Divider, Grid } from "@mui/material"
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
          <Grid container sx={{ marginTop: "10px" }} spacing={2}>
            {header.items.map((item) => (
              <Grid key={item.name} size={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 1.5 }} className={styles.item}>
                {/* Image */}
                <div className={styles.imageContainer}>
                  {/* <img src={item.icon} alt={item.name} className={styles.icon} /> */}
                </div>
                
                <Divider orientation="vertical" flexItem />

                {/* Text */}
                <div className={styles.textContainer}>
                  {item.name}
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </>
  )
}