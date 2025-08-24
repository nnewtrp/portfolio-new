'use client'
import { Divider, Grid } from "@mui/material"
import styles from "./page.module.css"
import skillList from "./skills.json"

const getImageIconPath = (path: string) => process.env.NEXT_PUBLIC_PROGRAMMING_ICON_URL + path
const iconSize = 40

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
                <div className={styles.iconContainer}>
                  <img src={getImageIconPath(item.icon)} alt={item.name} height={iconSize} width={iconSize} />
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